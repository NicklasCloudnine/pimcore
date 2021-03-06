/**
 * Pimcore
 *
 * This source file is subject to the GNU General Public License version 3 (GPLv3)
 * For the full copyright and license information, please view the LICENSE.md and gpl-3.0.txt
 * files that are distributed with this source code.
 *
 * @copyright  Copyright (c) 2009-2016 pimcore GmbH (http://www.pimcore.org)
 * @license    http://www.pimcore.org/license     GNU General Public License version 3 (GPLv3)
 */

pimcore.registerNS("pimcore.object.classes.data.externalImage");
pimcore.object.classes.data.externalImage = Class.create(pimcore.object.classes.data.data, {

    type: "externalImage",
    /**
     * define where this datatype is allowed
     */
    allowIn: {
        object: true,
        objectbrick: true,
        fieldcollection: true,
        localizedfield: true
    },

    initialize: function (treeNode, initData) {
        this.type = "externalImage";

        this.initData(initData);

        this.treeNode = treeNode;
    },

    getTypeName: function () {
        return t("externalImage");
    },

    getIconClass: function () {
        return "pimcore_icon_externalImage";
    },

    getLayout: function ($super) {

        $super();

        this.specificPanel.removeAll();
        this.specificPanel.add([
            {
                xtype: "numberfield",
                fieldLabel: t("preview_width"),
                name: "previewWidth",
                value: this.datax.previewWidth
            },
            {
                xtype: "numberfield",
                fieldLabel: t("preview_height"),
                name: "previewHeight",
                value: this.datax.previewHeight
            },
            ,
            {
                xtype: "numberfield",
                fieldLabel: t("url_width"),
                name: "inputWidth",
                value: this.datax.inputWidth
            }
        ]);

        return this.layout;
    },

    applySpecialData: function(source) {
        if (source.datax) {
            if (!this.datax) {
                this.datax =  {};
            }
            Ext.apply(this.datax,
                {
                    width: source.datax.width,
                    height: source.datax.height
                });
        }
    }

});
