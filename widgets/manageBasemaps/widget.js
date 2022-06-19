(function (window, mars2d) {
  //创建widget类，需要继承BaseWidget
  class MyWidget extends mars2d.widget.BaseWidget {
    //弹窗配置
    get view() {
      let index = this.getBasemaps().length;

      let width, height;
      if (index <= 4) {
        width = 190;
        height = Math.ceil(index / 2) * 100 + 70;
      } else if (index > 4 && index <= 6) {
        width = 270;
        height = Math.ceil(index / 3) * 100 + 70;
      } else {
        width = 360;
        height = Math.ceil(index / 4) * 105 + 70;
      }

      return {
        type: "window",
        url: "view.html",
        windowOptions: {
          width: width,
          height: height,
        },
      };
    }
    //初始化[仅执行1次]
    create() {}
    //每个窗口创建完成后调用
    winCreateOK(opt, result) {
      this.viewWindow = result;
    }
    //打开激活
    activate() {}
    //关闭释放
    disable() {
      this.viewWindow = null;
    }
    getBasemaps() {
      return this.map.getBasemaps(true);
    }

    getLayerVisible(layer) {
      return this.map.hasLayer(layer);
    }

    //树节点变化后调用
    updateBasemap(layerId) {
      // this._workCRS(layerId); //需要时再启用

      this.map.basemap = layerId;
      this.disableBase();
    }

    //处理CRS坐标系不同的底图之间切换
    _workCRS(layerId) {
      let layer = this.map.getLayer(layerId, "id");
      if (!layer || !layer.options.crs || this.map.crs == layer.options.crs) {
        return;
      }

      let center = this.map.getCenter(); //传出是wgs84无偏的
      let zoom = this.map.getZoom();

      //=================刷新页面方式切换不同坐标系的底图======================
      let lasturl = window.location.href;
      if (lasturl.lastIndexOf("#") != -1) {
        lasturl = lasturl.replace(window.location.hash, "").replace("#", "");
      }
      let idx = lasturl.lastIndexOf("?");
      if (idx != -1) {
        lasturl = lasturl.substring(0, idx);
      }
      this.map.remove();

      let url = lasturl + "?x=" + center[1] + "&y=" + center[0] + "&z=" + zoom + "&baselayer=" + layer.options.name;
      let req = haoutil.system.getRequest();
      for (let key in req) {
        if (key == "x" || key == "y" || key == "z" || key == "baselayer") {
          continue;
        }
        url += "&" + key + "=" + req[key];
      }
      window.location.href = url;

      //=================不刷新页面方式切换不同坐标系的底图======================
      //if (layer.options.crs == 'EPSG4326') {//影像底图
      //    map.setCrs(L.CRS.EPSG4326); //更改底图坐标系
      //    map.setView(center, zoom - 1); //影像底图和海图由于切图标准不同，级别相差一级
      //} else {
      //    map.setCrs(L.CRS.EPSG3857);
      //    map.setView(center, zoom + 1);
      //}
      //this.map.options.crs = layer.options.crs;
      //map.fire('zoomend', layer); //重新渲染,如果不重新渲染，由于坐标系发生变化，矢量数据错位
    }
  }

  //注册到widget管理器中。
  mars2d.widget.bindClass(MyWidget);

  //每个widet之间都是直接引入到index.html中，会存在彼此命名冲突，所以闭包处理下。
})(window, mars2d);