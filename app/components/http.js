/**
 * Created by john on 2016/8/31.
 */

(function (angular) {
	'use strict';
	var module = angular.module('movieCat.services.http', []);

	//自定义服务
	module.service('httpService', ['$window', '$document', function ($window, $document) {

		this.jsonp = function(url, data, callback) {
			var fnSuffix = Math.random().toString().replace('.', '');
			var cbFuncName = 'my_json_cb_' + fnSuffix;
			// 不推荐
			$window[cbFuncName] = callback;
			var querystring = url.indexOf('?') == -1 ? '?' : '&';
			for (var key in data) {
				querystring += key + '=' + data[key] + '&';
			}
			querystring += 'callback=' + cbFuncName;
			var scriptElement = $document[0].createElement('script');
			scriptElement.src = url + querystring;
			$document[0].body.appendChild(scriptElement);
		};
		/*this.jsonp = function (url, data, callback) {

			//1首先进行挂载回调函数
			var cbFuncName = '=my_json_cb_' + Math.random().toString().replace('.', '');
			$window[cbFuncName] = callback;
			//2首先将data转换成字符串的形式
			var querystring = url.indexOf('?') == -1 ? '?' : '&';
			for (var key in data) {
				querystring += key + '=' + data[key] + '&';
			}
			//3处理url的回调参数
			querystring += 'callback' + cbFuncName;

			//4创建一个script标签
			var scriptElement = $document[0].createElement('script');
			scriptElement.src = querystring;

			//5将script标签放到页面上
			document.body.appendChild(scriptElement);
		}*/
	}]);

})(angular);
