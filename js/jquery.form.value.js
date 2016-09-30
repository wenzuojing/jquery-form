(function () {

    function judgeType(ele, key, value) {
        if ($(ele).is(":radio")) {

            setRadio(ele, value);
        } else if ($(ele).is(":checkbox")) {
            setCheckbox(ele, value, true);
        } else {
            setValue(ele, value);
        }
    }

    function setValue(ele, value) {
        $(ele).val(value);
    }

    function setSelect(ele, value) {
        $("option", ele).each(function (idx, item) {
            if (this.value == value) {
                $(ele)[0].selectedIndex = idx;
            }
        });
    }

    function setRadio(ele, value) {
        $(ele).attr("checked", false).each(function (i, e) {
            if ($(e).val() == value) {
                $(e).attr("checked", true);
            }
        });

    }

    function setCheckbox(ele, value) {
        $(ele).attr("checked", false).each(function (i, e) {
            $(value).each(function (ii, ee) {
                if ($(e).val() == ee) {
                    $(e).attr("checked", true);
                }
            });
        });

    }

    $.fn.fillValue = function (obj) {

        for (var attr in obj) {
            var element = $("[name=" + attr + "]", this);
            if (!element[0]) {
                continue;
            }
            var type = element[0].nodeName;
            if (type == "INPUT") {
                judgeType(element, attr, obj[attr]);
            } else if (type == "SELECT") {
                setSelect(element, obj[attr]);
            } else if (type == "TEXTAREA") {
                setValue(element, obj[attr]);
            }
        }
        return this;
    }
})();
