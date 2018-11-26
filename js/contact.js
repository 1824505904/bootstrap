 // 百度地图API功能
    var map = new BMap.Map("allmap");    // 创建Map实例
    map.centerAndZoom(new BMap.Point(116.404,39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
	//  map.centerAndZoom方法创建地图，第一个参数可以是根据之前创建好的一个点为中心，创建出地图，也可以根据城市地区的中文名称创建地图。（如果拼写正确，可以根据城市的英文名称来创建）
	//  map.centerAndZoom第二个参数是地图缩放级别，最大为19，最小为0。（但实际当缩小到3的时候就已经。。。）
    //添加地图类型控件
    //BMap.Map方法创建地图时候需要一个容器(地图会根据容器的大小自动进行调整。)，填写相关容器的id。
    map.addControl(new BMap.MapTypeControl({
        mapTypes: [
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
        ]
    }));
    map.setCurrentCity("河南开封");          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放   关于地图大小：
    
    //可以通过map.setZoom();方法主动控制地图大小级别。
	//也可以通过设置map.enableScrollWheelZoom(true);利用鼠标滚轮控制大小。