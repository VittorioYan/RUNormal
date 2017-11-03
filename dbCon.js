function dbcon() {
	
var con = new ActiveXObject("ADODB.Connection");
alert("Hello World!");
con.ConnectionString = "DRIVER={MySQL ODBC 5.1 Driver};OPTION=3;SERVER=127.0.0.1;User ID=root;Password=123456;Database=mysql;Port=3306";
//服务器地址，数据库 账号密码，数据库名，端口
con.open;
var rs = new ActiveXObject("ADODB.Recordset");
rs.open("select * from user", con);
while (!rs.eof) {
var u = rs.Fields("User");//这里的User是user表中的一个字段
document.write(u);
rs.moveNext;
}
rs.close();
rs = null;
con.close();
con = null;
}