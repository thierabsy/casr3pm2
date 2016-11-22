$(document).ready(function() {
    
var events = [{

    // 'milestone' | 'smallItem' | 'bigItem'
    type: 'smallItem',
    label: ' <span style="color: white;">2016-01-01</span> <br> <img src="./tanaka_conference_china.jpg" style="width: 200px;height: 92px;" /> ',
    shortContent: 'Seminaires <br> SEMINAIRES big desc SI <br> with more lines <br> than the short one.',
    fullContent: 'big desc MS',
    showMore: undefined,
    showLess: undefined
  },
  {
    type: 'smallItem',
    label: '<span style="color: white;">2016-01-01</span> <br><img src="./assets/images/Pr_AZAR_KAN.png" style="width: 200px;height: 92px;" /> ',
    shortContent: 'Seminaires <br> SEMINAIRES big desc SI <br> with more lines <br> than the short one. <br> <div style="text-align: center;"><img src="" style="width: 50%;" /></div>',
    fullContent: 'big desc SI <br> with more lines <br> than the short one. <br> <div style="text-align: center;"><img src="https://assets-cdn.github.com/images/modules/logos_page/Octocat.png" style="width: 50%;" /></div>',
    showMore: 'show more',
    showLess: 'show less'
  },
  {
    type: 'smallItem',
    label: '<span style="color: white;">2016-01-01</span> <br> <img src="./assets/images/Pr_DUPAK_GROUP.png" style="width: 200px;height: 92px;" /> ',
    shortContent: 'SEMINAIRES <br><img src="https://assets-cdn.github.com/images/modules/logos_page/Octocat.png" style="width: 200px;height: 92px;" /> <br>SEMINAIRES ',
    fullContent: 'TTTTTTTTTTT',
    showMore: 'show more',
    showLess: 'show less'
  },
  {
    type: 'smallItem',
    label: '<span style="color: white;">2016-01-01</span> <br> <img src="./assets/images/Pr_DUPAK_GROUP.png" style="width: 200px;height: 92px;" /> ',
    shortContent: 'SEMINAIRES <br><img src="https://assets-cdn.github.com/images/modules/logos_page/Octocat.png" style="width: 200px;height: 92px;" /> <br>SEMINAIRES ',
    fullContent: 'TTTTTTTTTTT',
    showMore: 'show more',
    showLess: 'show less'
  },
  {
    type: 'smallItem',
    label: ' <span style="color: white;">2016-01-01</span><br> <img src="./assets/images/Pr_PHIL.png" style="width: 50%;" /> ',
    shortContent: 'Seminaires <br> SEMINAIRES big desc SI <br> with more lines <br> than the short one.',
    fullContent: 'big desc MS',
    showMore: undefined,
    showLess: undefined
  },
  {
    type: 'smallItem',
    label: ' <span style="color: white;">2016-01-01</span> <br> <img src="./assets/images/Pr_ROODNEY.png" style="width: 50%;" /> ',
    shortContent: 'Seminaires <br> SEMINAIRES big desc SI <br> with more lines <br> than the short one.',
    fullContent: 'big desc MS',
    showMore: undefined,
    showLess: undefined
  }
]

$('#timeline-container').timelineMe({items: events});

// orientation             : 'vertical',
// items                   : [],
// // horizontal-orientation specific options
// contentDimensionValue   : '400px',
// labelDimensionValue     : '200px',
// scrollBar               : true,
// scrollZones             : false,
// scrollArrows            : false,
// leftArrowElm            : undefined,
// rightArrowElm           : undefined



});