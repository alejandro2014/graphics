var provincesInfo = [
    { name: 'madrid', value: 100 },
    { name: 'barcelona', value: 90 },
    { name: 'cuenca', value: 80 },
    { name: 'valladolid', value: 70 },
    { name: 'lugo', value: 40 },
    { name: 'cadiz', value: 20 }
];

var tableOfColors = [
    '#0000aa', '#00aa00', '#00aaaa', '#aa0000', '#aa00aa',
    '#aaaa00', '#aaaaaa', '#000000', '#ffffff', '#aa4444'
]

function getColorFromNumber(provinceValue) {
    var position = provinceValue < 145 ? Math.floor(provinceValue / 16) : 9;
    
    return tableOfColors[position];
}

function getProvinceColor(provinceName) {
    let province = provincesInfo.find(pr => pr.name == provinceName);

    if (province != undefined) {
        return getColorFromNumber(province.value);
    }

    return '#eeeeee';
}

(function() {
    var spainMap = spainMapLayout;

    window.SpainMap = function(config) {
        var R, mapBBox, province, _i, _len;
        R = Raphael(config.id, config.width, config.height);

        var attr = {
            "fill": config.fillColor || "#d3d3d3",
            "stroke": config.strokeColor || "#fff",
            "stroke-width": config.strokeWidth || "0.75"
        };

        for (_i = 0, _len = spainMap.length; _i < _len; _i++) {
            province = spainMap[_i];

            var path = R.path(province.path).attr(attr);

            path.attr({
                fill: getProvinceColor(province.name)
            });
        }

        mapBBox = { x: 151, y: 11, width: 417, height: 348 };

        R.setViewBox(mapBBox.x, mapBBox.y, mapBBox.width, mapBBox.height, true);
        return spainMap = null;
    };
}).call(this);
