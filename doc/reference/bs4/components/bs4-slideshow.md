<rv-bind-content class="pt-3">
  <template>
    <rv-example-tabs handle="bs4-slideshow-1" class="pt-3">
      <template type="single-html-file">
        <bs4-slideshow control-prev-icon-src="{{ 'arrow_carrot_alt.svg' | asset_url }}" control-next-icon-src="{{ 'arrow_carrot_alt.svg' | asset_url }}" indicator-inactive-icon-src="{{ 'icon_circle-empty.svg' | asset_url }}" indicator-active-icon-src="{{ 'icon_circle-selected.svg' | asset_url }}" sticky="true" autoplay="true" autoplay-interval="10000">
          <div class="slideshow-inner">
            <div class="slide col-12 p-0">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=1" alt="Static Random Image from https://picsum.photos/">
              <div class="slide-caption">
                <h1>bs4-slideshow<br><small>The last bootstrap carousel you'll ever need</small></h1>
              </div>
            </div>
            <div class="slide col-12 p-0">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=2" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-12 p-0">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=3" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-12 p-0">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=4" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-12 p-0">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=5" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-12 p-0">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=6" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-12 p-0">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=7" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-12 p-0">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=8" alt="Static Random Image from https://picsum.photos/">
            </div>
          </div>
        </bs4-slideshow>
      </template>
    </rv-example-tabs>
  </template>
</rv-bind-content>

#### Multiple Items

<rv-bind-content class="pt-3">
  <template>
    <rv-example-tabs handle="bs4-slideshow-1" class="pt-3">
      <template type="single-html-file">
        <bs4-slideshow control-prev-icon-src="{{ 'arrow_carrot.svg' | asset_url }}" control-next-icon-src="{{ 'arrow_carrot.svg' | asset_url }}" indicator-inactive-icon-src="{{ 'icon_circle-empty.svg' | asset_url }}" indicator-active-icon-src="{{ 'icon_circle-selected.svg' | asset_url }}" slides-to-scroll="3" indicators="false">
          <div class="slideshow-inner">
            <div class="slide col-4">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=1" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-4">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=2" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-4">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=3" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-4">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=4" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-4">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=5" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-4">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=6" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-4">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=7" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-4">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=8" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-4">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=9" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-4">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=10" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-4">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=11" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-4">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=12" alt="Static Random Image from https://picsum.photos/">
            </div>
          </div>
        </bs4-slideshow>
      </template>
    </rv-example-tabs>
  </template>
</rv-bind-content>

#### Variable Width

<rv-bind-content class="pt-3">
  <template>
    <rv-example-tabs handle="bs4-slideshow-1" class="pt-3">
      <template type="single-html-file">
        <bs4-slideshow control-prev-icon-src="{{ 'arrow_carrot.svg' | asset_url }}" control-next-icon-src="{{ 'arrow_carrot.svg' | asset_url }}" indicator-inactive-icon-src="{{ 'icon_circle-empty.svg' | asset_url }}" indicator-active-icon-src="{{ 'icon_circle-selected.svg' | asset_url }}">
          <div class="slideshow-inner align-items-center">
            <div class="slide-placeholder col-3">&nbsp;</div>
            <div class="slide col-6">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=1" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-4">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=2" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-2">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=3" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-6">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=4" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-3">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=5" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-8">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=6" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-5">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=7" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-4">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=8" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide-placeholder col-4">&nbsp;</div>
          </div>
        </bs4-slideshow>
      </template>
    </rv-example-tabs>
  </template>
</rv-bind-content>

#### Autoplay

<rv-bind-content class="pt-3">
  <template>
    <rv-example-tabs handle="bs4-slideshow-1" class="pt-3">
      <template type="single-html-file">
        <bs4-slideshow autoplay="true" autoplay-velocity="0.05" control-prev-icon-src="{{ 'arrow_carrot.svg' | asset_url }}" indicator-inactive-icon-src="{{ 'icon_circle-empty.svg' | asset_url }}" indicator-active-icon-src="{{ 'icon_circle-selected.svg' | asset_url }}" control-next-icon-src="{{ 'arrow_carrot.svg' | asset_url }}">
          <div class="slideshow-inner">
            <div class="slide-placeholder col-4">&nbsp;</div>
            <div class="slide col-4">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=1" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-4">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=2" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-4">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=3" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-4">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=4" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-4">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=5" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-4">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=6" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-4">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=7" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-4">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=8" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide-placeholder col-4">&nbsp;</div>
          </div>
        </bs4-slideshow>
      </template>
    </rv-example-tabs>
  </template>
</rv-bind-content>

#### Autoplay with interval

<rv-bind-content class="pt-3">
  <template>
    <rv-example-tabs handle="bs4-slideshow-1" class="pt-3">
      <template type="single-html-file">
        <h2 class="text-center"></h2>
        <bs4-slideshow autoplay="true" autoplay-interval="4000" control-prev-icon-src="{{ 'arrow_carrot.svg' | asset_url }}" indicator-inactive-icon-src="{{ 'icon_circle-empty.svg' | asset_url }}" indicator-active-icon-src="{{ 'icon_circle-selected.svg' | asset_url }}" control-next-icon-src="{{ 'arrow_carrot.svg' | asset_url }}">
          <div class="slideshow-inner">
            <div class="slide-placeholder col-4">&nbsp;</div>
            <div class="slide col-4">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=1" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-4">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=2" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-4">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=3" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-4">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=4" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-4">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=5" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-4">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=6" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-4">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=7" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-4">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=8" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide-placeholder col-4">&nbsp;</div>
          </div>
        </bs4-slideshow>
      </template>
    </rv-example-tabs>
  </template>
</rv-bind-content>

#### With captions

<rv-bind-content class="pt-3">
  <template>
    <rv-example-tabs handle="bs4-slideshow-1" class="pt-3">
      <template type="single-html-file">
        <bs4-slideshow control-prev-icon-src="{{ 'arrow_carrot.svg' | asset_url }}" control-next-icon-src="{{ 'arrow_carrot.svg' | asset_url }}" indicator-inactive-icon-src="{{ 'icon_circle-empty.svg' | asset_url }}" indicator-active-icon-src="{{ 'icon_circle-selected.svg' | asset_url }}" sticky="true">
          <div class="slideshow-inner">
            <div class="slide col-12">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=1" alt="Static Random Image from https://picsum.photos/">
              <div class="slide-caption">
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
            <div class="slide col-12">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=2" alt="Static Random Image from https://picsum.photos/">
              <div class="slide-caption">
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div class="slide col-12">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=3" alt="Static Random Image from https://picsum.photos/">
              <div class="slide-caption">
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </div>
            </div>
          </div>
        </bs4-slideshow>
      </template>
    </rv-example-tabs>
  </template>
</rv-bind-content>

#### Custom Templates

<rv-bind-content class="pt-3">
  <template>
    <rv-example-tabs handle="bs4-slideshow-1" class="pt-3">
      <template type="single-html-file">
        <bs4-slideshow sticky="true">
          <div class="slideshow-inner">
            <div class="slide-placeholder col-2">&nbsp;</div>
            <div class="slide col-7 p-2">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=1" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-7 p-2">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=2" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-7 p-2">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=3" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-7 p-2">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=4" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-7 p-2">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=5" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-7 p-2">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=6" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-7 p-2">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=7" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide col-7 p-2">
              <img lazyload="lazy" class="img-fluid w-100" src="https://picsum.photos/1000/400?random=8" alt="Static Random Image from https://picsum.photos/">
            </div>
            <div class="slide-placeholder col-2">&nbsp;</div>
          </div>
          <template type="controls">
            <button class="btn btn-link carousel-control-prev" role="button" data-slide="prev" rv-on-click="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            <button class="btn btn-link carousel-control-next" role="button" data-slide="next" rv-on-click="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </button>
          </template>
          <template type="indicators">
            <ol class="carousel-indicators">
              <li rv-each-slide="items" rv-class-active="slide.active" rv-on-click="goTo | args slide.index"></li>
            </ol>
          </template>
        </bs4-slideshow>
      </template>
    </rv-example-tabs>
  </template>
</rv-bind-content>
