var $noteBook = (function(){
    var menuData=[
        { 
          title: '文件(F)',
          menuItems: [
            {
              title: '新建(N)',
              shortcut: 'Ctrl+N',
              enabled: true,
              handler: function() { console.log('新建(N) menu clicked!'); }
            },
            {
              title: '打开(O)...',
              shortcut: 'Ctrl+O',
              enabled: true,
              handler: function() { console.log('打开(O) menu clicked!'); }
            },
            {
              title: '保存(S)',
              shortcut: 'Ctrl+S',
              enabled: true,
              handler: function() { console.log('保存(S) menu clicked!'); }
            },
            {
              title: '另存为(A)...',
              shortcut: '',
              enabled: true,
              handler: function() { console.log('另存为(A) menu clicked!'); }
            },
            {
              title: 'hr',
              shortcut: '',
              enabled: true,
              handler: null
            },
            {
              title: '页面设置(U)...',
              shortcut: '',
              enabled: true,
              handler: function() { console.log('页面设置(U) menu clicked!'); }
            },
            {
              title: '打印(P)...',
              shortcut: 'Ctrl+P',
              enabled: true,
              handler: function() { console.log('打印(P) menu clicked!'); }
            },
            {
              title: 'hr',
              shortcut: '',
              enabled: true,
              handler: null
            },
            {
              title: '退出(X)',
              shortcut: '',
              enabled: true,
              handler: function() { console.log('退出(X) menu clicked!'); }
            }
          ],
          width: '202px',
          left: '0px'
        },
        { 
          title: '编辑(E)',
          menuItems: [
            {
              title: '撤销(U)',
              shortcut: 'Ctrl+Z',
              enabled: false,
              handler: function() { console.log('撤销(U) menu clicked!'); }
            },
            {
              title: 'hr',
              shortcut: '',
              enabled: true,
              handler: null
            },
            {
              title: '剪切(T)',
              shortcut: 'Ctrl+X',
              enabled: true,
              handler: function() { console.log('剪切(X) menu clicked!'); }
            },
            {
              title: '复制(C)',
              shortcut: 'Ctrl+C',
              enabled: false,
              handler: function() { console.log('复制(C) menu clicked!'); }
            },
            {
              title: '粘贴(P)',
              shortcut: 'Ctrl+V',
              enabled: false,
              handler: function() { console.log('粘贴(P) menu clicked!'); }
            },
            {
              title: '删除(L)',
              shortcut: 'Del',
              enabled: false,
              handler: function() { console.log('删除(L) menu clicked!'); }
            },
            {
              title: 'hr',
              shortcut: '',
              enabled: true,
              handler: null
            },
            {
              title: '使用 Bing 搜索...',
              shortcut: 'Ctrl+E',
              enabled: true,
              handler: function() { console.log('使用 Bing 搜索 menu clicked!'); }
            },
            {
              title: '查找(F)...',
              shortcut: 'Ctrl+F',
              enabled: false,
              handler: function() { console.log('查找(F) menu clicked!'); }
            },
            {
              title: '查找下一个(N)',
              shortcut: 'F3',
              enabled: false,
              handler: function() { console.log('查找下一个(N) menu clicked!'); }
            },
            {
              title: '替换(R)...',
              shortcut: 'Ctrl+H',
              enabled: true,
              handler: function() { console.log('替换(R) menu clicked!'); }
            },
            {
              title: '转到(G)...',
              shortcut: 'Ctrl+G',
              enabled: true,
              handler: function() { console.log('转到(G) menu clicked!'); }
            },
            {
              title: 'hr',
              shortcut: '',
              enabled: true,
              handler: null
            },
            {
              title: '全选(A)',
              shortcut: 'Ctrl+A',
              enabled: true,
              handler: function() { console.log('全选(A) menu clicked!'); }
            },
            {
              title: '时间/日期(D)',
              shortcut: 'F5',
              enabled: true,
              handler: function() { console.log('时间/日期(D) menu clicked!'); }
            },
          ],
          width: '218px',
          left: '52px'
        },
        { 
          title: '格式(O)',
          menuItems: [
            {
              title: '自动换行(W)',
              shortcut: '',
              enabled: true,
              handler: function() { console.log('自动换行(W) menu clicked!'); }
            },
            {
              title: '字体(F)...',
              shortcut: '',
              enabled: true,
              handler: function() { $fontList.show({}); }
            }
          ],
          width: '156px',
          left: '106px'
        },
        { 
          title: '查看(V)',
          menuItems: [
            {
              title: '状态栏(S)',
              shortcut: '',
              enabled: true,
              handler: function() {
                np.bShowStatusBar = !np.bShowStatusBar;
                $statusBar.display(np.bShowStatusBar);
                $menubar.checked(3, 0, np.bShowStatusBar);
              }
            }
          ],
          width: '138px',
          left: '162px'
        },
        { 
          title: '帮助(H)',
          menuItems: [
            {
              title: '查看帮助(H)',
              shortcut: '',
              enabled: true,
              handler: function() { console.log('查看帮助(H) menu clicked!'); }
            },
            {
              title: '关于记事本(A)',
              shortcut: '',
              enabled: true,
              handler: function() { $dlgAbout.show(); }
            },
          ],
          width: '166px',
          left: '216px'
        }
    ],
    menus = [],
    active = -1;
    var $text = $('<div class="text"><textarea spellcheck="false" auto-size="none" wrap="off"></textarea></div');
    function showTitle(){
        var $title = $('<ul class="menu-title"></ul>');//一级菜单
        for(var i=0;i<menuData.length;i++){
            var $tit = $('<li class="title"></li>');//title
            $tit.html(menuData[i].title);
            $tit.attr('id',i);
            $title.append($tit);
            $tit.click(function(){
                var id = parseInt($(this).attr('id'));
                // console.log(id);
                if(active === -1) {
                    menus[id].css({ display: 'inline-block' });
                    active = id;
                  } else if(active !== id) {
                    menus[active].css({ display: 'none' });
                    menus[id].css({ display: 'inline-block' });
                    active = id;
                  } else {
                    menus[active].css({ display: 'none' });
                    active = -1;
                  }
            });
            $tit.hover(function() {
                if(active !== -1) {
                  var id = parseInt($(this).attr('id'));
                  menus[active].css({ display: 'none' });
                  menus[id].css({ display: 'inline-block' });
                  active = id;
                }
              });
        }
        $("#note-app").append($title)
    }
    $("#note-app").append($text);
    function showList(){
        for(var i=0;i<menuData.length;i++){
            var $list = $('<ul class="menus"></ul>');//二级菜单
            var items = menuData[i].menuItems;//二级菜单内容
            for(var j=0;j<items.length;j++){
                if(items[j].title === 'hr'){
                    var $hr = $('<li class="menu-hr"></li>');
                    $list.append($hr);
                    continue;
                }
                var $item = $('<li class="menu-item"></li>');//二级菜单内容
                
                $item.html(items[j].title);
                $item.attr('data-x',i);
                $item.attr('data-y',j);
                if(items[j].shortcut !== '') {
                    var $shorcut = $('<span class="shortcut"></span>');
                    $shorcut.html(items[j].shortcut);
                    $item.append($shorcut);
                }
                $list.append($item);
                $item.click(function(){
                    var x = this.dataset.x, 
                        y = this.dataset.y;
                        // console.log(x,y)
                    menuData[x].menuItems[y].handler();
                    menus[x].css({display: 'none'});
                    active = -1;
                });
            }
            $list.css({
                width: menuData[i].width,
                left: menuData[i].left,
                display: 'none'
            });
            $("#note-app").append($list);
            menus.push($list);
        }
    }
    var $fontList = (function (){
        // console.log("ssspps")
        var $font = $(''
          + '<div class="notepad-dlg-mask notepad-dlg-font">'
            + '<div class="dialogbox notepad-dlgbox">'
              + '<div class="notepad-dlg-titlebar">'
                + '<p class="title">字体</p>'
                + '<span class="close-btn">✖</span>'
              + '</div>'
              + '<div class="main notepad-dlg-main">'
                + '<div class="font-family"><p>字体(F):</p></div>'
                + '<div class="font-style"><p>字形(Y):</p></div>'
                + '<div class="font-size"><p>大小(S):</p></div>'
                + '<fieldset class="sample">'
                  + '<legend>示例</legend>'
                  + '<p class="pp">AaBbYyZz</p>'
                + '</fieldset>'
                + '<div class="script">'
                  + '<label>'
                    + '脚本(R):<br>'
                    + '<select>'
                      + '<option value="西欧语言">西欧语言</option>'
                      + '<option value="中文 GB2312">中文 GB2312</option>'
                    + '</select>'
                  + '</label>'
                + '</div>'
                + '<input class="btn-ok btn" type="button" value="确定">'
                + '<input class="btn-cancel btn" type="button" value="取消">'
              + '</div>'
            + '</div>'
          + '</div>');
        var $btnOk = $font.find('.btn-ok'),
            $btnClose = $font.find('.close-btn'),
            $btnCancel = $font.find('.btn-cancel');
            // $sample = $font.find('.sample-txt'),
            // $titleBar = $font.find('.notepad-dlg-titlebar');
        var fonts = ['Agency FB', 'Algerian', 'Arial', 'Arial Rounded MT', 'Axure Handwriting', 'Bahnschrift', 'Baskerville Old Face', 'Bauhaus 93', 'Bell MT', 'Berlin Sans FB', 'Bernard MT', 'BlackAdder ITC'],
            styles = ['常规', '斜体', '粗体', '粗偏斜体'],
            sizes = ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72'];
        var cfg = {
            family: 'Arial',
            style: '常规',
            size: '16',
            okHandler: null
          };
            function sample() {
              $(".pp").css({ 'font-family': cfg.family, 'font-size': cfg.size + 'pt' });
              if(cfg.style === '斜体') {
                $(".pp").css({'font-style': 'italic'});
                return;
              }
              if(cfg.style === '粗体') {
                $(".pp").css({'font-weight': 'bold'});
                return;
              }
              if(cfg.style === '粗偏斜体') {
                $(".pp").css({'font-weight': 'bold', 'font-style': 'italic'});
                return;
              }
              console.log("cfg")
            }
          
            function init() {
              var lstFamily = new comList();
              lstFamily.show({
                container: '.notepad-dlg-font .font-family',
                width: '176px',
                list: fonts,
                select: fonts.indexOf(cfg.family),
                isFont: true,
                selectHandler: function(e) {
                  cfg.family = fonts[e];
                  sample();
                }
              });
          
              var lstStyle = new comList();
              lstStyle.show({
                container: '.notepad-dlg-font .font-style',
                width: '132px',
                list: styles,
                select: styles.indexOf(cfg.style),
                isFontStyle: true,
                selectHandler: function(e) {
                  cfg.style = styles[e];
                  sample();
                }
              });
          
              var lstSize = new comList();
              lstSize.show({
                container: '.notepad-dlg-font .font-size',
                width: '64px',
                list: sizes,
                select: sizes.indexOf(cfg.size),
                selectHandler: function(e) {
                  cfg.size = sizes[e];
                  sample();
                }
              });+
              
              sample();
            }
            function destory() { $font.remove(); }
            function show(conf) {
              $.extend(cfg, conf);
              $("#note-app").append($font);
              init();
              // $font.find('.dialogbox').draggable({handle: $titleBar});
              $btnClose.click(destory);
              $btnCancel.click(destory);
              $btnOk.click(function() {
                $("textarea").css({'font-size': cfg.size, 'font-style': cfg.style, 'font-family':cfg.family});
                // console.log(cfg.family, cfg.style,cfg.size)
                destory();
              });
              $font.click(function(e) {
                e.stopPropagation();
              });
            }
            return {show: show};
          
    }());
    return{
        showTitle:showTitle,
        showList:showList,
    }
}());


(function(){
    $noteBook.showTitle();
    $noteBook.showList();
}());