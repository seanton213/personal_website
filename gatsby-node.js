const path = require('path');

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;

	return new Promise((resolve, reject) => {
		const blogPostTemplate = path.resolve('src/templates/BlogPost.js');
		resolve(
			graphql(
				`
					query {
						allMarkdownRemark(
							sort: { order: ASC, fields: [frontmatter___date] }
						) {
							edges {
								node {
									frontmatter {
										path
										title
                                        date
                                        description
									}
								}
							}
						}
					}
				`
			).then(result => {
				const posts = result.data.allMarkdownRemark.edges;

				posts.forEach(({ node }) => {
					const path = node.frontmatter.path;
					createPage({
						path,
						component: blogPostTemplate,
						context: {
							pathSlug: path
						}
					});
					resolve();
				});
			})
		);
	});
};
