var provincesInfo = [
    { name: 'madrid', value: 160 },
    { name: 'barcelona', value: 140 },
    { name: 'cuenca', value: 80 },
    { name: 'valladolid', value: 70 },
    { name: 'lugo', value: 40 },
    { name: 'cadiz', value: 10 }
];

var tableOfColors = [
    '#FDC5BF', '#ED9793', '#DD6968', '#CD3B3D', '#BE0E12',
    '#A70D10', '#900C0F', '#790C0E', '#620B0D', '#4C0B0C'
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
