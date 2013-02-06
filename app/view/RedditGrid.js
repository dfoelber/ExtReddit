/*
 * File: app/view/RedditGrid.js
 *
 * This file was generated by Sencha Architect version 2.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.RedditGrid', {
    extend: 'Ext.grid.Panel',

    width: 797,
    title: 'Reddit Posts',
    store: 'redditHomepage',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'gridcolumn',
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        return '<strong><a href="'+record.get('url')+'">' + value + '</a></strong>';
                    },
                    width: 300,
                    defaultWidth: 300,
                    dataIndex: 'title',
                    text: 'Title'
                },
                {
                    xtype: 'gridcolumn',
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        return '<a href="http://reddit.com/r/'+value+'">'+value+'</a>';
                    },
                    dataIndex: 'subreddit',
                    text: 'Subreddit'
                },
                {
                    xtype: 'gridcolumn',
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        var points = record.data.ups - record.data.downs;
                        return points + " (<span class='ups'>"+record.data.ups+"</span>/<span class='downs'>"+record.data.downs+"</span>)";
                    },
                    text: 'Points'
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    dataIndex: 'is_self',
                    text: 'Is_self'
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    dataIndex: 'permalink',
                    text: 'Permalink'
                },
                {
                    xtype: 'gridcolumn',
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        return '<a href="http://reddit.com/u/'+value+'">'+value+'</a>';
                    },
                    dataIndex: 'author',
                    text: 'Author'
                }
            ]
        });

        me.callParent(arguments);
    }

});