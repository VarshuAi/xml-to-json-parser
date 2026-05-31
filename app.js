
            window.parseXMLToJson = function() {
                const xml = document.getElementById('x-xml-inp').value;
                const out = document.getElementById('x-json-out');
                const match = xml.match(/<([^>]+)>([^<]+)<\/\1>/);
                if (match) {
                    let obj = {};
                    obj[match[1]] = match[2];
                    out.value = JSON.stringify(obj, null, 2);
                } else {
                    out.value = "Error: simple XML structure required.";
                }
            }
            parseXMLToJson();
        