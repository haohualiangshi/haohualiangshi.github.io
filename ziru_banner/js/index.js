
/*获取数据并填充html*/
$.ajax({
    url:"data.json",
    dataType:"jsonp",
    jsonpCallback:"getData",
    success:function(data){
        var data1=data.data.space;
        console.log(data);
        var bannerStr="";
        for(var spacLen=0;spacLen<data1.length;spacLen++){
            if(data1[spacLen].photos_min.length>1){
                bannerStr+='<div class="swiper-slide swiper-slide2"><img src="'+data1[spacLen].photos_min[0]+'" alt="展示图"></div>'
            }else{
                bannerStr+='<div class="swiper-slide swiper-slide2"><img src="'+data1[spacLen].photos_min[0]+'" alt="展示图"></div>'
            }
        }
        $(".swiper-container-fa>.swiper-wrapper").html(bannerStr);
        swiperInit(data1);
    }

})

/*初始化swiper并实现分页器*/
function swiperInit(data){
  var mySwiperNav = new Swiper(".swiper-conotainer-tab", {
// 分页器
    freeMode: true,
    slideToClickedSlide: true,
    slidesPerView: "auto",
    resistance: true,
    resistanceRatio: 0,
})
  var mySwiper = new Swiper ('.swiper-container-fa', {
    // 父 banner
    loop:true,
    pagination: '.swiper-pagination-fa',
    createPagination: true,
    paginationClickable: true,
    resistance: true,
    resistanceRatio: 0,
    uniqueNavElements :false,
    paginationBulletRender: function(index,className) {
        return '<span id="pagination_'+(index + 1)+'" class="swiper-slide  pagination '+className+'">'+data[index].title+'<span class="triangle"></span></span>';
    },
    onInit: function(swiper) {
        
    },
    onTransitionStart: function(swiper) {
       
    },
    onSlideChangeStart: function(swiper) {
        console.log(swiper.activeIndex)
    },
    onSlideChangeEnd: function(swiper) {
        
        var paginId="#pagination_"+swiper.activeIndex;
        // var eleRect=$(paginId)[0].getBoundingClientRect();
        // console.log(eleRect);
        // if(eleRect.left+eleRect.width > $("body").width()){
        //     $(".swiper-pagination-fa").scrollLeft(eleRect.left);
        // }
     
    },
  }) 

}

 


