window.Apex = {
  chart: {
    foreColor: '#ccc',
    toolbar: {
      show: false
    },
  },
  stroke: {
    width: 3
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    theme: 'light'
  }
};

let headsUpData1 = {
  chart: {
    id: 'HUD1',
    group: 'HUD',
    type: 'line',
    height: 150,
    sparkline: {
      enabled: true
    }
  },
  series: [{
    data: [0, 50, 100, 150, 200, 300, 450, 550, 650, 750, 790, 800, 
    780, 740, 720, 700, 650, 610, 570, 530, 500, 470, 430, 400, 380, 
    360, 340, 310, 307, 304, 303, 303, 302]
  }],
  stroke: {
    curve: 'smooth'
  },
  markers: {
    size: 0
  },
  grid: {
    padding: {
      top: 20,
      bottom: 10,
      left: 190
    }
  },
  colors: ['#fff'],
  tooltip: {
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return '';
        }
      }
    }
  }
}

let headsUpData2 = {
  chart: {
    id: 'HUD2',
    group: 'HUD',
    type: 'line',
    height: 150,
    sparkline: {
      enabled: true
    }
  },
  series: [{
    data: [0, 950, 930, 935, 933]
  }],
  stroke: {
    curve: 'straight'
  },
  grid: {
    padding: {
      top: 20,
      bottom: 10,
      left: 160
    }
  },
  markers: {
    size: 0
  },
  colors: ['#fff'],
  tooltip: {
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return '';
        }
      }
    }
  }
}

let headsUpData3 = {
  chart: {
    id: 'HUD3',
    group: 'HUD',
    type: 'bar',
    stacked: true,
    height: 150,
    sparkline: {
      enabled: false
    },
    dropShadow: {
      enabled: false,
      top: 1,
      left: 1,
      blur: 2,
      opacity: 0.2,
    }
  },
   plotOptions: {
    bar: {
      columnWidth: '10%',
      horizontal: true,
    },
  },
  series: [{
    name: 'Engine Temp',
    data: [90]
  }, {
    name: 'Max Temp',
    data: [20]
  }],
  colors: ["#20E647", "#d10b0b"],
  grid: {
    padding: {
      top: 20,
      bottom: 10,
      left: 0,
      height: 150
    }
  }
}

let headsUpData4 = {
  chart: {
    id: 'HUD3',
    group: 'HUD',
    height: 150,
    type: "area",
  },
  dataLabels: {
    enabled: false
  },
  colors: ["#77c2ef"],
  series: [
    {
      data: [0, 5, 7, 7]
    }
  ]
}

new ApexCharts(document.querySelector("#headsUpData1"), headsUpData1).render()
new ApexCharts(document.querySelector("#headsUpData2"), headsUpData2).render()
new ApexCharts(document.querySelector("#headsUpData3"), headsUpData3).render()
new ApexCharts(document.querySelector("#headsUpData4"), headsUpData4).render()

let consumptionBar = {
  chart: {
    height: 380,
    type: 'bar',
    stacked: true,
  },
  plotOptions: {
    bar: {
      columnWidth: '30%',
      horizontal: false,
    },
  },
  series: [{
    name: 'Engines ',
    data: [42, 47, 81, 55, 72, 47, 52, 46]
  },
  ],
  colors: ["#d10b0b"],
  xaxis: {
    categories: ['Engine 1', 'Engine 2', 'Engine3', 'Engine 4', 
    'Engine 5', 'Engine 6', 'Engine 7', 'Engine 8'],
  }
}

let chartConsumptionBar = new ApexCharts(
  document.querySelector("#consumptionBar"),
  consumptionBar
)

chartConsumptionBar.render();

let vehicleData = {
  chart: {
    height: 380,
    type: 'area',
    stacked: false,
  },
  stroke: {
    curve: 'smooth'
  },
  series: [{
      name: "Drag",
      data: [11, 15, 26, 20, 33, 27]
    },
    {
      name: "Turbo temperature",
      data: [32, 33, 21, 42, 19, 32]
    },
    {
      name: "Fuel consumption",
      data: [20, 39, 52, 11, 29, 43]
    }
  ],
  tooltip: {
    followCursor: true
  },
  fill: {
    opacity: 1,
  },

}

let vehicleDataChart = new ApexCharts(
  document.querySelector("#vehicleData"),
  vehicleData
);

vehicleDataChart.render();