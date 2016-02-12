/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('app.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: '故障诊断系统',
        system: {
            name : '故障诊断系统',
            version : '1.2016.02.25',
            iconUrl : ''
        },

        user: {
            company : '武当太极公司',
            department : '工程部',
            name : '张三丰'
        },

        service: {
            company : '无锡熙旺公司',
            name : '蒋锋',
            phonenumber : '1320528----',
            qq : '78580822',
            email : 'jfok1972@qq.com',
            copyright : '熙旺公司'
        }
    }

});
