import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel-autoheight';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import 'owl.carousel';
import './style/all.css';
import 'bootstrap';

let owl_carousel = require('owl.carousel');
window.fn = owl_carousel;
const Index = () => {
  const dataFetchedRef = useRef(false);
  function getProductList() {
    const url = 'http://localhost:8000/api/queryProducts.php';
    axios.post(url,)
      .then((response) => {
        var inseertHtml = '';
        for (var x = 0; x < response.data.length; x++) {
          var d = response.data[x];

          if (x % 3 === 0) {
            inseertHtml += '<div class="row product-row">';
          }
          inseertHtml += '<div class=" outer col-4">' +
            '<div class="container1">' +
            '<div id="myCarousel' + x + '" class="carousel slide" data-ride="carousel" data-interval="false">' +
            '<ol class="carousel-indicators">' +
            '<li data-target="#myCarousel' + x + '" data-slide-to="0" class="active"></li>';

          if (d['ppic_1'] != null && d['ppic_1'] != '') {
            inseertHtml += '<li data-target="#myCarousel' + x + '" data-slide-to="1"></li>';
          }
          if (d['ppic_2'] != null && d['ppic_2'] != '') {
            inseertHtml += '<li data-target="#myCarousel' + x + '" data-slide-to="2"></li>';
          }
          if (d['ppic_3'] != null && d['ppic_3'] != '') {
            inseertHtml += '<li data-target="#myCarousel' + x + '" data-slide-to="3"></li>';
          }
          if (d['ppic_4'] != null && d['ppic_4'] != '') {
            inseertHtml += '<li data-target="#myCarousel' + x + '" data-slide-to="4"></li>';
          }

          inseertHtml += '</ol>' +
            '<div class="carousel-inner">' +
            '<div class="carousel-item active"><img src="/uploads/' + d['ppic_main'] + '" class="d-block w-100" alt="" />' +
            '</div>';
          if (d['ppic_1'] != null && d['ppic_1'] != '') {
            inseertHtml += '<div class="carousel-item"><img src="/uploads/' + d['ppic_1'] + '" class="d-block w-100" alt="" />' +
              '</div>';
          }
          if (d['ppic_2'] != null && d['ppic_2'] != '') {
            inseertHtml += '<div class="carousel-item"><img src="/uploads/' + d['ppic_2'] + '" class="d-block w-100" alt="" />' +
              '</div>';
          }
          if (d['ppic_3'] != null && d['ppic_3'] != '') {
            inseertHtml += '<div class="carousel-item"><img src="/uploads/' + d['ppic_3'] + '" class="d-block w-100" alt="" />' +
              '</div>';
          }
          if (d['ppic_4'] != null && d['ppic_4'] != '') {
            inseertHtml += '<div class="carousel-item"><img src="/uploads/' + d['ppic_4'] + '" class="d-block w-100" alt="" />' +
              '</div>';
          }

          inseertHtml += '</div>' +
            '<button class="carousel-control-prev" type="button" data-target="#myCarousel' + x + '" data-slide="prev">' +
            '<span class="carousel-control-prev-icon"aria-hidden="true"></span>' +
            '<span class="sr-only">Previous</span>' +
            '</button>' +
            '<button class="carousel-control-next" type="button" data-target="#myCarousel' + x + '" data-slide="next">' +
            '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
            '<span class="sr-only">Next</span>' +
            '</button>' +
            '</div>' +
            '</div>' +
            '<div class="product-text ">' +
            '<p id="product-name">' + d['pname'] + '</p>' +
            '<button class="product-check-more" onclick="window.sessionStorage.setItem(\'pid\', ' + d['pid'] + '); window.location.href=\'http://localhost:3000/selectgo/product/ProductDetail\';">????????????</button>' +
            '</div>' +
            '</div>';

          if (x % 3 === 2) {
            inseertHtml += '</div>';
          } else {
            if (x === (response.data.length - 1)) {
              inseertHtml += '</div>';
            }
          }
        }
        document.getElementById("pList").innerHTML = inseertHtml;


      })
      .catch(error => alert(error));
  }

  useEffect(() => {
    if (dataFetchedRef.current) {
      //?????????????????????
      return;
    } else {
      dataFetchedRef.current = true;
      getProductList();
    }
  }, []);
  return (
    <div>
      <div className="outWrap">
        <OwlCarousel className="owl-carousel owl-theme banner-carousel" loop margin={0} center items={1.5} autoplay autoplayTimeout={2500} autoplayHoverPause>
          <div className="banneritem">
            <img className="banner-img" src="/imgs/banner/1.jpeg" />
          </div>
          <div className="banneritem">
            <img className="banner-img" src="/imgs/banner/2.jpeg" />
          </div>
          <div className="banneritem">
            <img className="banner-img" src="/imgs/banner/3.jpeg" />
          </div>
          <div className="banneritem">
            <img className="banner-img" src="/imgs/banner/4.jpeg" />
          </div>
          <div className="banneritem">
            <img className="banner-img" src="/imgs/banner/5.jpeg" />
          </div>
        </OwlCarousel>
      </div>
      {/* wish ok */}
      <span className="wishtext">?????????????????????</span>
      <a className="checkall" href="">????????????</a>


      <div className="outwish">
        <OwlCarousel className="owl-carousel owl-theme wish-carousel" loop margin={10} items={4} autoplay autoplayTimeout={3500} autoplayHoverPause>
          <div className="wishpic"><img src="/imgs/wish/????????????????????????????????? ???????????????????????.jpeg" alt="" /></div>
          <div className="wishpic"><img src="/imgs/wish/??????????????????????????????????????????????????????????????.jpeg" alt="" /></div>
          <div className="wishpic"><img src="/imgs/wish/???????????????????????????????????????????????????????.jpeg" alt="" /></div>
          <div className="wishpic"><img src="/imgs/wish/????????????????????????????????????????????????????????????????.jpeg" alt="" /></div>
          <div className="wishpic"><img src="/imgs/wish/????????????????????????????????????????????????????????.jpeg" alt="" /></div>
          <div className="wishpic"><img src="/imgs/wish/???????????????????????????????????????.jpeg" alt="" /></div>
          <div className="wishpic"><img src="/imgs/wish/??????????????????????????????????????????????.jpeg" alt="" /></div>
          <div className="wishpic"><img src="/imgs/wish/?????????????????????????????????????????????????????.jpeg" alt="" /></div>

        </OwlCarousel>
      </div>
      {/* wish ing */}
      <span className="wishtext">?????????????????????</span>
      <a className="checkall" href="">????????????</a>

      <div className="outwish2">
        <OwlCarousel className="owl-carousel owl-theme wish-carousel" loop margin={10} items={4} autoplay autoplayTimeout={3500} autoplayHoverPause>
          <div className="wishpic2">
            <div className="wishpic"><img src="/imgs/wish/?????????????????????????????????????????????????????????????.jpeg" alt="" /></div></div>
          <div className="wishpic2">
            <div className="wishpic"><img src="/imgs/wish/??????????????????????????????????????????????????????????.jpeg" alt="" /></div></div><div className="wishpic2">
            <div className="wishpic"><img src="/imgs/wish/??????????????????????????????????????????????????????.jpeg" alt="" /></div></div><div className="wishpic2">
            <div className="wishpic"><img src="/imgs/wish/??????????????????????????????????????????????????????????????????????.jpeg" alt="" /></div></div><div className="wishpic2">
            <div className="wishpic"><img src="/imgs/wish/????????????????????????????????? ??ava ??????????????????????.jpeg" alt="" /></div></div><div className="wishpic2">
            <div className="wishpic"><img src="/imgs/wish/?????????????????????????????????????????????????.jpeg" alt="" /></div></div><div className="wishpic2">
            <div className="wishpic"><img src="/imgs/wish/?????????????????????????????????????????????????????????????????????????????????????.jpeg" alt="" /></div></div><div className="wishpic2">
            <div className="wishpic"><img src="/imgs/wish/????????????????????????????????????????????????????????????????.jpeg" alt="" /></div></div>
        </OwlCarousel>
      </div>

      {/* events news */}
      <div className="container">
        <div className="row hot-post-row">
          <div className="col hot-post-col">
            <img src="/imgs/???????????????.jpeg" alt="" />
          </div>
          <div className="col hot-post-col">
            <img src="/imgs/????????????_?????????????????????.jpeg" alt="" />
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div id="pList" className="container">



        </div>
      </div>

    </div>
  );
};

export default Index;
