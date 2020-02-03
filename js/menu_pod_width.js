    jQuery(function($){

        $.fn.menuresize = function(){
            $menuWidth = $(this).innerWidth();
            $menuLi = $(this).children('ul').children('li');
            $menuLiLen = $menuLi.length;
            $menuLiWidth = 0;
            for (i=0;i<$menuLiLen;i++){
                $menuLiWidth += $menuLi.eq(i).outerWidth();
            }
            $diff = $menuWidth-$menuLiWidth;
            $rw = Math.floor($diff/$menuLiLen);
            for (i=0;i<$menuLiLen;i++){
                $menuLi.eq(i).width($menuLi.eq(i).width()+$rw);
            }
        }
        $('.yam-menu-top').menuresize();
    });