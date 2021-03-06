/**
 * @author mikel
 */

(function() {
    tinymce.PluginManager.requireLangPack('imageupload');
    tinymce.create('tinymce.plugins.ImageUpload', {
        init : function(ed, url) {
            var t = this;
            t.editor = ed;
            // Register commands
            ed.addCommand('mceImageUpload', t._save, t);
            // Register buttons
            ed.addButton('upload', {title : 'Upload image', cmd : 'mceImageUpload'});

        },

        getInfo : function() {
            return {
                longname : 'Image upload',
                author : 'Michal Letynski <mikel@mikel.pl>',
                authorurl : 'http://www.consol.pl',
                infourl : 'http://www.consol.pl',
                version : "1.0"
            };
        },

        // Private methods

        _save : function() {
            var ed = this.editor;
            ed.execCallback('uploadimage_callback', ed);
        }
    });

    // Register plugin
    tinymce.PluginManager.add('imageupload', tinymce.plugins.ImageUpload);
})();