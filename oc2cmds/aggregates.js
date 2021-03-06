// Copyright 2018 Efrain Ortiz

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

"use strict";
module.exports =  function (callback){
    var AuthConfig = require(__dirname + '/../etc/config.json');
    var fs = require('fs');
    var request = require('request');
    var options = { 
        method: 'GET', 
        url: 'http://'+ AuthConfig['openc2server'] + '/api/meters/aggregates' };
        request(options, 
            function (err,body) {
                    if (!err) {
                        var parsedbody = JSON.parse(body.body);
                        callback(parsedbody);
                        } 
                    else {
                        if (typeof callback == 'function')
                            {
                        callback(err);
                        }
                    }
                })

            }