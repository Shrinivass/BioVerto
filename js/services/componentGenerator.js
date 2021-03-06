angular.module("MyApp")
    .service('componentGenerator', function(){


        this.generateComponent = function(obj)
        {
            var temp = "";
            temp = "<h5>"+obj.label+"</h5>";
            switch (obj.type)
            {
                case "bool":
                    temp += "<input type=\"checkbox\"  ng-change = \"changeValue('"+obj.property+"',"+obj.name+")\"ng-model=\""+obj.name+"\"><br>"
                    break;
                case "range":
                    temp += "<input type=\"range\" min=\""+obj.min+"\" max=\""+obj.max+"\" value = \""+obj.default+"\" ng-change = \"changeValue('"+obj.property+"',"+obj.name+")\"ng-model=\""+obj.name+"\"><br>" //name=\""+obj.name+"\"
                    break;
                case "select":
                    temp += "<select ng-change = \"changeValue('"+obj.property+"',"+obj.name+")\" ng-model=\""+obj.name+"\" >";
                    for(var j =0;j <obj.options.length;j++)
                    {
                        temp += "<option value=\""+obj.options[j].value+"\">"+obj.options[j].label+"</option>"
                    }
                    temp += "</select>";

                    break;
                case "listbox":
                    temp += "<select ng-change = \"changeValue('"+obj.property+"',"+obj.name+") ng-model=\""+obj.name+"\" size = "+obj.size+" >";
                    for(var j =0;j <obj.options.length;j++)
                    {
                        temp += "<option value=\""+obj.options[j].value+"\">"+obj.options[j].label+"</option>"
                    }
                    temp += "</select>";

                    break;
            }
            temp +="<br>"
            return temp;
        }
        this.genControls = function(data)
        {
            var temp = ""
            for(var i =0;i<data.length;i++)
            {
                temp += this.generateComponent(data[i]);
            }

            return temp;
        }
    })