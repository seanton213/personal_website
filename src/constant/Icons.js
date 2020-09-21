const ICONS = {
  FACEBOOK: {
    path:
      'M14.984 0.187v4.125h-2.453c-1.922 0-2.281 0.922-2.281 2.25v2.953h4.578l-0.609 4.625h-3.969v11.859h-4.781v-11.859h-3.984v-4.625h3.984v-3.406c0-3.953 2.422-6.109 5.953-6.109 1.687 0 3.141 0.125 3.563 0.187z',
    viewBox: '0 0 16 28',
  },
  GITHUB: {
    path:
      'M10 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM20 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM22.5 19c0-2.391-1.453-4.5-4-4.5-1.031 0-2.016 0.187-3.047 0.328-0.812 0.125-1.625 0.172-2.453 0.172s-1.641-0.047-2.453-0.172c-1.016-0.141-2.016-0.328-3.047-0.328-2.547 0-4 2.109-4 4.5 0 4.781 4.375 5.516 8.188 5.516h2.625c3.813 0 8.188-0.734 8.188-5.516zM26 16.25c0 1.734-0.172 3.578-0.953 5.172-2.063 4.172-7.734 4.578-11.797 4.578-4.125 0-10.141-0.359-12.281-4.578-0.797-1.578-0.969-3.437-0.969-5.172 0-2.281 0.625-4.438 2.125-6.188-0.281-0.859-0.422-1.766-0.422-2.656 0-1.172 0.266-2.344 0.797-3.406 2.469 0 4.047 1.078 5.922 2.547 1.578-0.375 3.203-0.547 4.828-0.547 1.469 0 2.953 0.156 4.375 0.5 1.859-1.453 3.437-2.5 5.875-2.5 0.531 1.062 0.797 2.234 0.797 3.406 0 0.891-0.141 1.781-0.422 2.625 1.5 1.766 2.125 3.938 2.125 6.219z',
    viewBox: '0 0 26 28',
  },
  EMAIL: {
    path:
      'M26 23.5v-12c-0.328 0.375-0.688 0.719-1.078 1.031-2.234 1.719-4.484 3.469-6.656 5.281-1.172 0.984-2.625 2.188-4.25 2.188h-0.031c-1.625 0-3.078-1.203-4.25-2.188-2.172-1.813-4.422-3.563-6.656-5.281-0.391-0.313-0.75-0.656-1.078-1.031v12c0 0.266 0.234 0.5 0.5 0.5h23c0.266 0 0.5-0.234 0.5-0.5zM26 7.078c0-0.391 0.094-1.078-0.5-1.078h-23c-0.266 0-0.5 0.234-0.5 0.5 0 1.781 0.891 3.328 2.297 4.438 2.094 1.641 4.188 3.297 6.266 4.953 0.828 0.672 2.328 2.109 3.422 2.109h0.031c1.094 0 2.594-1.437 3.422-2.109 2.078-1.656 4.172-3.313 6.266-4.953 1.016-0.797 2.297-2.531 2.297-3.859zM28 6.5v17c0 1.375-1.125 2.5-2.5 2.5h-23c-1.375 0-2.5-1.125-2.5-2.5v-17c0-1.375 1.125-2.5 2.5-2.5h23c1.375 0 2.5 1.125 2.5 2.5z',
    viewBox: '0 0 28 28',
  },
  LINKEDIN: {
    path:
      'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z',
    viewBox: '0 0 24 24',
  },
  BITBUCKET: {
    path:
      'M811,702C719,763,616,793,500,793C384,793,280,763,189,702L178,708L174,717C187,798,199,857,209,897C217,911,228,923,241,934C254,945,269,954,286,961C302,968,318,973,333,978C347,982,364,985,383,989C425,996,466,999,506,1000C547,1001,588,996,630,986C673,977,711,962,747,943C761,934,773,923,782,908C791,893,797,879,800,865C802,851,805,834,808,813C811,793,814,777,818,766C818,763,819,755,823,744C826,732,827,723,826,716C824,709,820,704,811,702zM96,330C100,355,106,388,113,429C120,470,126,501,129,521C130,525,131,532,133,542C134,553,135,561,136,567C137,572,139,579,142,588C144,596,148,603,152,609C157,615,162,620,168,625C228,671,308,700,410,711C556,726,681,708,784,657C797,650,809,643,817,638C826,632,835,624,844,613C853,602,859,591,861,579C895,379,918,245,929,177C931,167,932,156,932,144C932,131,929,121,922,112C897,81,853,56,790,37C669,2,530-8,375,7C298,14,234,27,183,46C171,51,161,54,154,57C146,60,137,65,126,71C114,77,105,83,98,90C91,96,85,103,79,113C73,122,69,132,68,142C72,172,76,204,81,239C87,275,91,305,96,330zM605,567C580,598,549,615,512,619C474,622,441,610,411,584C380,558,365,526,363,489C362,461,369,434,384,410C400,385,420,367,446,355C486,337,526,340,567,363C607,387,630,420,636,464C641,502,630,536,605,567zM248,105C261,98,272,94,281,91C291,89,304,87,322,84C434,64,550,64,669,83C689,86,704,89,713,91C722,92,734,97,748,104C763,111,775,120,783,131C771,143,756,153,737,160C718,167,703,171,692,173C681,175,663,177,637,180C547,192,456,192,362,180C338,177,320,175,309,173C297,171,282,166,264,159C245,152,229,143,217,131C224,121,235,112,248,105zM551,435C540,423,527,416,512,414C497,411,482,414,467,421C452,428,441,440,435,457C430,473,430,490,436,507C442,524,453,536,469,542C490,556,513,554,537,539C561,523,571,503,568,477C568,461,562,447,551,435z',
    viewBox: '0 0 1000 1000',
  },
};

export default ICONS;