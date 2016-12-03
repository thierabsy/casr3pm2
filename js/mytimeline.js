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
    shortContent: 'Seminaires <br> SEMINAIRES big desc SI <br> with more lines <br> than the short one. <br> <div style="text-align: center;"></div>',
    fullContent: 'big desc SI <br> with more lines <br> than the short one. <br> <div style="text-align: center;"></div>',
    showMore: 'show more',
    showLess: 'show less'
  },
  {
    type: 'smallItem',
    label: '<span style="color: white;">2016-01-01</span> <br> <img src="./assets/images/Pr_DUPAK_GROUP.png" style="width: 200px;height: 92px;" /> ',
    shortContent: 'SEMINAIRES <br>SEMINAIRES ',
    fullContent: 'TTTTTTTTTTT',
    showMore: 'show more',
    showLess: 'show less'
  },
  {
    type: 'smallItem',
    label: '<span style="color: white;">2016-01-01</span> <br> <img src="./assets/images/Pr_DUPAK_GROUP.png" style="width: 200px;height: 92px;" /> ',
    shortContent: 'SEMINAIRES  <br>SEMINAIRES ',
    fullContent: 'TTTTTTTTTTT',
    showMore: 'show more',
    showLess: 'show less'
  },
  {
    type: 'smallItem',
    label: ' <span style="color: white;">2016-01-01</span><br> <img src="./assets/images/Pr_PHIL.png" style="width: 20%; width:100px !important;" /> ',
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