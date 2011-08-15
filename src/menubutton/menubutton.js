/**
 * combination of menu and button ,similar to native select
 * @author yiminghe@gmail.com
 */
KISSY.add("menubutton/menubutton", function(S, UIBase, Node, Button, MenuButtonRender, Menu, Component) {
    var $ = Node.all,
        KeyCodes = Node.KeyCodes,
        ALIGN = {
            points:["bl","tl"],
            overflow:{
                failX:1,
                failY:1,
                adjustX:1,
                adjustY:1
            }
        },
        MenuButton = UIBase.create(Button, [Component.DecorateChild], {

            /**
             * private
             */
            _hideMenu:function() {
                var menu = this.get("menu");
                if (menu) {
                    menu.hide();
                }
            },

            /**
             * private
             */
            _showMenu:function() {
                var self = this,
                    el = self.get("el"),
                    menu = self.get("menu");
                if (menu && !menu.get("visible")) {
                    menu.set("align", S.merge({
                        node:el
                    }, ALIGN, self.get("menuAlign")));
                    menu.show();
                    el.attr("aria-haspopup", menu.get("el").attr("id"));
                }
            },

            _uiSetCollapsed:function(v) {
                if (v) {
                    this._hideMenu();
                } else {
                    this._showMenu();
                }
            },


            _reposition:function() {
                var self = this,
                    menu = self.get("menu"),
                    el = self.get("el");
                if (menu && menu.get("visible")) {
                    menu.set("align", S.mix({
                        node:el
                    }, self.get("menuAlign")));
                }
            },

            /**
             * 产生菜单时对菜单监听，只监听一次
             * @protected
             */
            __bindMenu:function() {
                var self = this,
                    menu = this.get("menu");
                if (menu) {
                    menu.on("afterActiveItemChange", function(ev) {
                        self.set("activeItem", ev.newVal);
                    });

                    menu.on("click", function(e) {
                        self.fire("click", {
                            target:e.target
                        });
                    });

                    //窗口改变大小，重新调整
                    $(window).on("resize", self._reposition, self);
                    /*
                     bind 与 getMenu 都可能调用，时序不定
                     */
                    self.__bindMenu = S.noop;
                }
            },

            /**
             * @private
             */
            bindUI:function() {
                this.__bindMenu();
            },

            /**
             * @inheritDoc
             */
            _handleKeyEventInternal:function(e) {
                var self = this,menu = self.get("menu");

                // space 只在 keyup 时处理
                if (e.keyCode == KeyCodes.SPACE) {
                    // Prevent page scrolling in Chrome.
                    e.preventDefault();
                    if (e.type != "keyup") {
                        return undefined;
                    }
                } else if (e.type != "keydown") {
                    return undefined;
                }
                //转发给 menu 处理
                if (menu && menu.get("visible")) {
                    var handledByMenu = menu._handleKeydown(e);
                    // esc
                    if (e.keyCode == KeyCodes.ESC) {
                        self.set("collapsed", true);
                        return true;
                    }
                    return handledByMenu;
                }

                // Menu is closed, and the user hit the down/up/space key; open menu.
                if (e.keyCode == KeyCodes.SPACE ||
                    e.keyCode == KeyCodes.DOWN ||
                    e.keyCode == KeyCodes.UP) {
                    self.set("collapsed", false);
                    return true;
                }
                return undefined;
            },

            _performInternal:function() {
                var self = this,menu = self.get("menu");
                if (menu) {
                    if (menu.get("visible")) {
                        // popup menu 监听 doc click ?
                        self.set("collapsed", true);
                    } else {
                        self.set("collapsed", false);
                    }
                }
            },

            /**
             * @inheritDoc
             */
            _handleBlur:function(e) {
                MenuButton.superclass._handleBlur.call(this, e);
                this.set("collapsed", true);
            },

            /**
             * if no menu , then construct
             * @private
             */
            getMenu:function() {
                var self = this,m = self.get("menu");
                if (!m) {
                    m = new Menu.PopupMenu(S.mix({
                        prefixCls:this.get("prefixCls")
                    }, self.get("menuCfg")));
                    self.set("menu", m);
                    self.__bindMenu();
                }
                return m;
            },

            /**
             * Adds a new menu item at the end of the menu.
             * @param item Menu item to add to the menu.
             */
            addItem:function(item, index) {
                this.getMenu().addChild(item, index);
            },

            removeItem:function(c, destroy) {
                this.get("menu") && this.get("menu").removeChild(c, destroy);
            },

            removeItems:function(destroy) {
                this.get("menu") && this.get("menu").removeChildren(destroy);
            },

            getItemAt:function(index) {
                return this.get("menu") && this.get("menu").getChildAt(index);
            },

            // 禁用时关闭已显示菜单
            _uiSetDisabled:function(v) {
                MenuButton.superclass._uiSetDisabled.apply(this, S.makeArray(arguments));
                !v && this.set("collapsed", true);
            },

            /**
             * @private
             */
            decorateChildrenInternal:function(ui, el, cls) {
                el.hide();
                var docBody = S.one(el[0].ownerDocument.body);
                docBody.prepend(el);
                var menu = new ui(S.mix({
                    srcNode:el,
                    prefixCls:cls
                }, this.get("menuCfg")));
                this.set("menu", menu);
            },

            /**
             * @private
             */
            destructor:function() {
                var self = this, menu = self.get("menu");
                $(window).detach("resize", self._reposition, self);
                menu && menu.destroy();
            }

        }, {
            ATTRS:{
                activeItem:{
                    view:true
                },
                menuAlign:{
                    value:{}
                },
                menuCfg:{},
                decorateChildCls:{
                    value:"popupmenu"
                },
                // 不关心选中元素 , 由 select 负责
                // selectedItem
                menu:{
                    setter:function(v) {
                        v.set("parent", this);
                    }
                },
                collapsed:{
                    value:true,
                    view:true
                }
            },
            DefaultRender:MenuButtonRender
        });

    Component.UIStore.setUIByClass("menu-button", {
        priority:Component.UIStore.PRIORITY.LEVEL2,
        ui:MenuButton
    });

    return MenuButton;
}, {
    requires:["uibase","node","button","./menubuttonrender","menu","component"]
});