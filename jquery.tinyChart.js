/*
Copyright 2011 Robert Silve  <robert@silve.net>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

           
(function($) {
    
    var bar = function(comp, options) {
            var w = $(comp).width(); 
            var h = $(comp).height();
        
            var w_unit = options.w_unit;
            var data = options.data;
            
            var max = Math.max.apply(0, data);
            var r = h/max;
        
            var $container = $(comp);
            $container.css("position","relative");
        
            var x_offset = 0;
            $.each(data, function(index, item) {
                var $bar = $('<div class="chart_bar"/>');
                $bar.height(item * r);
                $bar.width(w_unit);
                $bar.css("position","absolute");
                $bar.css("bottom", "0");
                $bar.css("left", x_offset);
           
                $container.append($bar);
            
                x_offset += w_unit;
            });
        };
    
    var tinyChart = function(args) {
        var opt = $.extend({}, options, args);
        var type = options.type;
        if (type == 'bar') {
            $(this).each(function(index, comp) { bar(comp, opt) });
        }    
    }
    
    var options = {
        type : 'bar',
        w_unit : 11,
        data: [0]
    };
    

    $.fn.tinyChart = tinyChart;


})(jQuery);
