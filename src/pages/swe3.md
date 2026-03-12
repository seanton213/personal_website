---
path: '/blog/swe-3'
title: Migrating Data at Scale
date: '2026-03-12'
description: 'Lessons learned from a large-scale data migration using Snowflake, S3, and Aurora MySQL'
---

At some point in your engineering career, you will likely be asked to migrate data. Maybe it's a small table with a few thousand rows — no big deal. But when you're dealing with large datasets and production systems that can't afford downtime, the stakes are much higher. I had the opportunity to work on a migration like this, and it taught me a lot about patience, planning, and the realities of working at scale.

## Why Migrate?

The motivation was straightforward: data consolidation and removing API dependencies. When your system relies on external APIs to access data, you're introducing latency, rate limits, and failure points that become increasingly painful as traffic grows. For example, your service may hold onto threads for longer while it is failing while making requests to the failing API, while new requests are coming in. At scale, those problems compound. Pulling that data closer to where it's needed — and owning it directly — removes an entire class of reliability concerns. Normally, you'd want a Circuit Breaker in place to help stop the impact, sure, but if there's a way to remove the dependency - even better

There are multiple ways to migrate data, and this will depend on your requirements. The method I'll describe here involves moving data out of Snowflake, staging it in S3, and loading it into Aurora MySQL.

## The General Strategy

After working through this, here's the approach that made sense:

1. **Create staging tables** separate from your production tables. You load into staging so you never lock production while the migration is in progress.
2. **Load the data** from S3 into the staging tables.
3. **Apply indexes after loading**, not before. Loading data without indexes is significantly faster. The index can be built once the data is in place. If you have a small dataset and time isn't a concern, this matters less — but at scale, it matters a lot.
4. **Dual write** into both the old and new tables once the initial load is done.
5. **Load the delta** — the data that was written during the time the migration was running.
6. **Cut over** to the new tables once everything is in sync.

This approach keeps production stable throughout and gives you a clean rollback path if something goes wrong before cutover.

## Snowflake is Fast — Aurora is Not

One thing that caught me off guard was just how uneven the experience is across the different parts of the pipeline. Unloading data from Snowflake into S3 is genuinely fast. Snowflake is built for this kind of work and it shows.

Loading into Aurora MySQL is a different story. Even when scaling up Aurora Serverless v2 ACUs, bulk load operations and index creation are slow. The database engine just isn't optimized for ingesting massive amounts of data the way a warehouse is. You can throw more capacity at it and still find yourself waiting.

The honest reality is that depending on the size of your dataset, this process can take several hours to days (again depending on your data set size). That's not a failure — it's just the nature of the operation. The key is configuring the migration to run in the background so it doesn't block yourself.

## Validation

Once the data was loaded, validation was done by applying the primary key constraints on the staging tables. If the PK applies cleanly, you have confidence that the data is consistent and there are no duplicates. It's a simple check but an effective one for catching the most common problems before you cut over. This can also bite you if there's a non-unique anomaly - best to verify in Snowflake at the start. This is a challenge if you are still populating to a single table, but you can also stage in Snowflake a finite set to validate uniqueness before loading.

## Final Thoughts

Data migrations have a way of making you appreciate the systems you're working with — and their limitations. The migration itself wasn't complicated conceptually, but executing it cleanly against a large dataset in a production environment required careful sequencing and a lot of patience. The dual write + delta load pattern in particular was key to making the cutover feel safe rather than risky.

If you're planning something similar, the biggest piece of advice I'd give is: don't underestimate how long the Aurora load will take, and design your process from the start to run in the background. Plan for days, not hours, for any data migration effort you undertake.

## Links

- https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Integrating.LoadFromS3.html
- https://docs.snowflake.com/en/user-guide/data-unload-s3
