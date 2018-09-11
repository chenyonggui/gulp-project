	//判断某年份是否为闰年
	function isLeapYear(year){
		return year%4==0 && year%100!=0 || year%400==0;
	}
	
	
	//将日期格式化输出 “2015-08-24”
	function date2string(date, sep){
		var sep = sep || "-";
		
		var m = date.getMonth()+1;
		var d = date.getDate();
		return date.getFullYear()+sep+ (m<10?"0"+m:m) + sep+ (d<10?"0"+d:d);
	}
	
	date2string(new Date())
	
	//获得某个月份的天数
	function getDaysByMonth(month, year){
		year = year || new Date().getFullYear();
		
		if(!month || typeof month != "number" ) {
			console.error("参数必须为数字类型！");
			return;
		} 
		if( !(month > 0 && month < 13) ){
			console.error("月份必须在1-12之间");
			return;
		}
		month = Math.round(month);
		
		switch(month) {
			case 1 : 
			case 3 :
			case 5 :
			case 7 :
			case 8 :
			case 10 :
			case 12 : return 31;
			case 2 : return (isLeapYear(year) ? 29 : 28);
			case 4 :
			case 6 :
			case 9 :
			case 11 : return 30;
		}
	}
	
	
	//将字符串转换为日期
	function string2Date(datestr, sep){
		
		if( !sep || !(datestr && datestr.length >= 8) ){
			console.error("字符串格式错误！不能解析");
			return;
		}
		
		var list = datestr.split(sep);
		if( !(list[0].length==4 && list[1]>0&&list[1]<13 && list[2]>0 && list[2]<32) ){
			console.error("字符串格式错误！不能解析");
			return;
		}
		return new Date(datestr);
	}
	
	
	//判断两个日期相差的天数
	function getDaysBetweenMonths(d1, d2){
		if( !(d1 instanceof Date && d2 instanceof Date) ){
			console.error("参数传错了！重来！");
			return;
		}
		var dis = Math.abs(d1.getTime() - d2.getTime());
		return (dis/1000/3600/24).toFixed(2);
	}
	
	
	//获得N天以后的日期(string/date)
	function getAfterDay(n){
		var now = new Date();
		now.setDate( now.getDate()+n );
		return date2string(now);
	}
		