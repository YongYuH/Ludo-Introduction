var html_text_object = {
    "en-us": {
        "welcome-text": "Get into habit<br>with people<br>around the world!",
        "users-num-before": "THERE ARE<br>",
        "users-num-after": "<br>PEOPLE PLAY WITH US",
        "join-button": "Join Us",
        "introduction-text-title": "What is Ludo",
        "introduction-text-content": "Ludo is a free web service let your life fun and productive.<br>People can redefine the problem they face daily and get feedback<br>when they finish their work.",
        "game-text-title": "GAME",
        "game-text-content": "Simple interface<br>including<br>report, game ,and time,<br>you can start easy<br>like play video GAME.",
        "social-text-title": "SOCIAL",
        "social-text-content": "Find the right Ludor<br>quickly through<br>photograph icon<br>and language basic<br>MATCH SYSTEM.",
        "expert-text-title": "EXPERT",
        "expert-text-content": "Your knowledge<br>and experience<br>can influence<br>needed people<br>directly through<br>EXPERT SYSTEM.",
        "desktop-form-text": "If you want to try LUDO, please wait Us<br>fews days and we will launch soon.<br>Leave Your Email so that we can notice<br>you immediately after we launch.",
        "mobile-form-text": "If you want to try LUDO,<br>please wait us fews days<br>and we will launch soon.<br>Leave Your Email so that<br>we can notice you immediately<br>after we launch.<br><br>",
        "fill_in": "Fill in the form",
        "typeform-div": '<div class="typeform-widget" data-url="https://yongyuh.typeform.com/to/RmhHAY" data-text="Ludo" style="width:100%;height:100%;"></div><script>(function(){var qs,js,q,s,d=document,gi=d.getElementById,ce=d.createElement,gt=d.getElementsByTagName,id=\'typef_orm\',b=\'https://s3-eu-west-1.amazonaws.com/share.typeform.com/\';if(!gi.call(d,id)) {js=ce.call(d,\'script\');js.id=id;js.src=b+\'widget.js\';q=gt.call(d,\'script\')[0];q.parentNode.insertBefore(js,q)}})()</script><div style="font-family: Sans-Serif;font-size: 12px;color: #999;opacity: 0.5; padding-top: 5px;">Powered by<a href="https://www.typeform.com/examples/forms/?utm_campaign=RmhHAY&amp;utm_source=typeform.com-3813118-Basic&amp;utm_medium=typeform&amp;utm_content=typeform-embedded-poweredbytypeform&amp;utm_term=EN" style="color: #999" target="_blank">Typeform</a></div>',
        "contact-us-title": "Contact Us",
        "copyright": "© 2016 LUDONOW.COM ALL RIGHTS RESERVED"
    },
    "zh-tw": {
        "welcome-text": "和全世界的人一起成長",
        "users-num-before": "簡單填寫<span class=\"english\">Email</span><br>與",
        "users-num-after": "人<br>一起成長",
        "join-button": "加入",
        "introduction-text-title": "什麼是<span class=\"english\">Ludo</span>",
        "introduction-text-content": "<span class=\"english\">Ludo</span>是一個免費的網頁服務，<br>我們希望人們生活中的大小事<br>都可以透過<span class=\"english\">Ludo</span>被重新定義<br>並且直接回饋到每個人身上",
        "game-text-title": "遊戲",
        "game-text-content": "簡單的操作方式，<br>由回報，遊戲，時間三大要素<br>讓你輕鬆開始養成習慣",
        "social-text-title": "社交",
        "social-text-content": "圖示分類，<br>語言自動配對，<br>留言系統，<br>更快速找到志同道合的<span class=\"english\">Ludor</span>",
        "expert-text-title": "專家",
        "expert-text-content": "專家系統讓專家的經驗與知識<br>可以直接影響到群眾<br>同時得到現金回饋",
        "desktop-form-text": "如果想要玩玩看<span class=\"english\">Ludo</span>，<span class=\"english\">Ludo</span>網站將在近期上線，<br>在底下的表單留下<span class=\"english\">Email</span>，我們將會通知你最新資訊",
        "mobile-form-text": "如果想要玩玩看<span class=\"english\">Ludo</span>，<br><span class=\"english\">Ludo</span>網站將在近期上線，<br>在底下的表單留下<span class=\"english\">Email</span>，<br>我們將會通知你最新資訊",
        "fill_in": "立即填寫表單",
        "typeform-div": '<div class="typeform-widget" data-url="https://yongyuh.typeform.com/to/NBIykg" data-text="Ludo" style="width:100%;height:500px;"></div><script>(function(){var qs,js,q,s,d=document,gi=d.getElementById,ce=d.createElement,gt=d.getElementsByTagName,id=\'typef_orm\',b=\'https://s3-eu-west-1.amazonaws.com/share.typeform.com/\';if(!gi.call(d,id)){js=ce.call(d,\'script\');js.id=id;js.src=b+\'widget.js\';q=gt.call(d,\'script\')[0];q.parentNode.insertBefore(js,q)}})()</script><div style="font-family: Sans-Serif;font-size: 12px;color: #999;opacity: 0.5; padding-top: 5px;">Powered by <a href="https://www.typeform.com/examples/forms/?utm_campaign=NBIykg&amp;utm_source=typeform.com-3813118-Basic&amp;utm_medium=typeform&amp;utm_content=typeform-embedded-poweredbytypeform&amp;utm_term=ZH" style="color: #999" target="_blank">Typeform</a></div>',
        "contact-us-title": "聯絡我們",
        "copyright": "© 2016 LUDONOW.COM ALL RIGHTS RESERVED"
    }
}

function renderLanguageText(language) {
    $.each(html_text_object[language], function(className, content) {
        $("." + className).html(content);
    });
}