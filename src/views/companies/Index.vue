<template>
  <div>
    <main class="overflow-hidden ">
      <!--Start Breadcrumb Style2-->
      <div class="breadcrumb-area" style="background-image: url(src/assets/images/inner-pages/breadcum-bg.png);">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="breadcrumb-content pb-60 text-center wow fadeInUp animated">
                <h2>Компании</h2>
                <div class="breadcrumb-menu">
                  <ul>
                    <li><a href="index.html"><i class="flaticon-home pe-2"></i>Название сайта</a></li>
                    <li><i class="flaticon-next"></i></li>
                    <li class="active">Компании</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--End Breadcrumb Style2-->
      <!--Start Product Categories One-->
      <section class="product-categories-one pb-60">
        <div class="container">
          <div class="row wow fadeInUp animated">
          </div>
        </div>
      </section>
      <!--End Product Categories One-->
      <!--Start product-grid-->
      <div class="product-grid pt-60 pb-120">
        <div class="container">
          <div class="row gx-4">
            <div class="col-xl-3 col-lg-4">
              <div class="shop-grid-sidebar">
                <button class="remove-sidebar d-lg-none d-block"><i
                    class="flaticon-cross"> </i></button>
                <div class="sidebar-holder">
                  <form action="#0" class="footer-default__subscrib-form m-0 p-0 wow fadeInUp animated">
                  </form>
                  <div class="single-sidebar-box mt-30 wow fadeInUp animated ">
                    <h4>Выберите категорию</h4>
                    <div class="checkbox-item">
                      <form>
                        <div v-for="category in FILTERS.categories" class="form-group"><input type="checkbox" :id="category.id"> <label
                            :for="category.id">{{ category.title }}</label></div>
                      </form>
                    </div>
                    <div class="single-sidebar-box mt-30 wow fadeInUp animated pb-0 border-bottom-0 ">
                      <h4> Тэги </h4>
                      <ul class="popular-tag">
                        <li v-for="tag in FILTERS.tags" ><a href="#0">{{ tag.title }}</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-9 col-lg-8">
              <div class="row">
                <div class="col-xl-12">
                  <div
                      class="shop-grid-page-top-info p-0 justify-content-md-between justify-content-center">
                    <div class="left-box wow fadeInUp animated">
                      <p>Результаты 1–{{COMPANIES.length}} из {{COMPANIES.length}}</p>
                    </div>
                    <div
                        class="right-box justify-content-md-between justify-content-center wow fadeInUp animated">
                      <!--                      Сортировка                          -->
                      <div class="short-by">
                        <div class="select-box">
                          <select class="wide">
                            <option data-display="Short by latest">Featured</option>
                            <option value="1">Best selling</option>
                            <option value="2">Alphabetically, A-Z</option>
                            <option value="3">Alphabetically, Z-A</option>
                            <option value="3">Price, low to high</option>
                            <option value="3">Price, high to low</option>
                            <option value="3">Date, old to new</option>
                          </select>
                        </div>
                      </div>
                      <!--Изменение внешнего вида страницы-->
                      <div class="product-view-style d-flex justify-content-md-between justify-content-center">
                        <ul class="nav nav-pills" id="pills-tab" role="tablist">
                          <!--                          Сетка-->
                          <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-grid-tab"
                                    data-bs-toggle="pill" data-bs-target="#pills-grid" type="button"
                                    role="tab" aria-selected="true">
                              <i class="flaticon-grid"></i>
                            </button>
                          </li>
                          <!--Список-->
                          <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-list-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-list" type="button" role="tab"
                                    aria-selected="false">
                              <i class="flaticon-list"></i>
                            </button>
                          </li>
                        </ul>
                        <button class="slidebarfilter d-lg-none d-flex"><i class="flaticon-edit"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-grid" role="tabpanel"
                         aria-labelledby="pills-grid-tab">
                      <div class="row">
                        <div v-for="company in COMPANIES " class="col-xl-4 col-lg-6 col-6 ">
                          <div class="products-three-single w-100  mt-30">
                            <div class="products-three-single-img"><a
                                href="shop-details-3.html" class="d-block"> <img
                                :src="company.product_images[0].url"
                                class="first-img" alt=""/> <img
                                :src="company.product_images[1].url"
                                alt="" class="hover-img"/>
                            </a>
                            </div>
                            <div class="products-three-single-content text-center"> <span>
                                                                        {{ company.category.title }}</span>
                              <h5><a href="shop-details-3.html">{{ company.title }}</a></h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="pills-list" role="tabpanel"
                         aria-labelledby="pills-list-tab">
                      <div class="row ">
                        <div class="col-12">
                          <div v-for="company in COMPANIES" class="product-grid-two list mt-30 ">
                            <div class="product-grid-two__img">
                              <a href="shop-details-2.html" class="d-block"> <img
                                  :src="company.product_images[0].url"
                                  class="first-img" alt=""/> <img
                                  :src="company.product_images[1].url"
                                  alt="" class="hover-img"/>
                              </a>
                            </div>
                            <div class="product-grid-two-content text-center">
                              <h5><a href="shop-details-2.html">{{ company.title }} </a></h5>
                              <p class="text"> {{ company.description }} </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12 d-flex justify-content-center wow fadeInUp animated">
                  <ul class="pagination text-center">
                    <li class="next"><a href="#0"><i class="flaticon-left-arrows"
                                                     aria-hidden="true"></i> </a></li>
                    <li><a href="#0">1</a></li>
                    <li><a href="#0" class="active">2</a></li>
                    <li><a href="#0">3</a></li>
                    <li><a href="#0">...</a></li>
                    <li><a href="#0">10</a></li>
                    <li class="next"><a href="#0"><i class="flaticon-next-1"
                                                     aria-hidden="true"></i> </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--End product-grid-->
    </main>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "index",

  mounted() {
    $(document).trigger('change');
    this.getProducts();
    this.getFilterList();
    console.log(this.FILTERS);
  },

  computed: {
      ...mapGetters(['COMPANIES', 'FILTERS']),
  },

  methods: {
      ...mapActions(['getProducts', 'getFilterList'])
  }
}
</script>

<style scoped>

</style>