var provincesInfo = [
    { name: 'madrid', value: 34 },
    { name: 'barcelona', value: 34 },
    { name: 'cuenca', value: 34 }
];

function getColorFromNumber(provinceValue) {
    return '#aa0000';
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
