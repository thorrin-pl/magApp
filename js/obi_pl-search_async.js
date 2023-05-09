/*! For license information please see search-async.c8ef19.js.LICENSE.txt */
(window.dscHeadr = window.dscHeadr || []).push([
  [0],
  {
    18: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, "default", function () {
          return y;
        });
      var r = s(0),
        a = s.n(r),
        n = s(1),
        i = s.n(n),
        u = s(4),
        c = s.n(u),
        o = s(5),
        h = s.n(o),
        l = s(2),
        d = s.n(l),
        g = s(6);
      function p(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var s,
            r = d()(e);
          if (t) {
            var a = d()(this).constructor;
            s = Reflect.construct(r, arguments, a);
          } else s = r.apply(this, arguments);
          return h()(this, s);
        };
      }
      var y = (function (e) {
        c()(s, e);
        var t = p(s);
        function s() {
          var e;
          return (
            a()(this, s),
            ((e = t.call(this)).searchWtParam = ""),
            (e.searchSuggestions = []),
            (e.mouseTimeout = 0),
            (e.containerInjected = !1),
            (e.countryUrlPrefix = ""),
            (e.searchWrapper = document.querySelector(".headr__search")),
            (e.searchForm = e.searchWrapper.querySelector(
              ".headr__search-form"
            )),
            (e.searchQueryInput = e.searchWrapper.querySelector(
              ".headr__search-input"
            )),
            (e.searchSuggestInput = e.searchWrapper.querySelector(
              ".headr__search-input-suggest"
            )),
            (e.searchButton = e.searchWrapper.querySelector(
              ".headr__search-submit"
            )),
            (e.searchResetButton = e.searchWrapper.querySelector(
              ".headr__search-reset"
            )),
            (e.searchFlyoutContainer = e.searchWrapper.querySelector(
              ".headr__search-flyout-container"
            )),
            e
          );
        }
        return (
          i()(s, [
            {
              key: "init",
              value: function () {
                if (this.searchQueryInput) {
                  var e = window.location.pathname.split("/");
                  ("fr" !== e[1] && "it" !== e[1]) ||
                    (this.countryUrlPrefix = "/" + e[1]),
                    this.submitEvents(),
                    this.keyboardEvents(),
                    this.mouseEvents(),
                    this.onFocus();
                }
              },
            },
            {
              key: "onFocus",
              value: function () {
                this.trackEvent("searchSearchfieldFocused", {
                  eventCategory: "search",
                  eventAction: "searchfieldFocused",
                });
              },
            },
            {
              key: "injectFlyout",
              value: function () {
                this.containerInjected ||
                  ((this.containerInjected = !0),
                  (this.searchFlyoutContainer.innerHTML =
                    '\n        <div class="tw-flex tw-w-full">\n          <div class="tw-w-full lg:tw-w-48 tw-z-10" data-suggestion="results"></div>\n          <div class=" tw-w-full tw-hidden lg:tw-block tw-bg-white tw-ml--px">\n            <div class="headr__suggestion__additional tw-m-5" data-suggestion="additional"></div>\n          </div>\n        </div>'));
              },
            },
            {
              key: "resetSearch",
              value: function () {
                (this.searchSuggestInput.value = ""),
                  (this.searchQueryInput.value = ""),
                  this.hideFlyout();
              },
            },
            {
              key: "showFlyout",
              value: function () {
                g.a.publish("search.flyout.opened"),
                  (this.searchFlyoutContainer.style.display = "block"),
                  document.addEventListener("click", (e) => {
                    e.target.closest(".headr__search") || this.hideFlyout();
                  });
              },
            },
            {
              key: "hideFlyout",
              value: function () {
                this.searchFlyoutContainer.style.display = "none";
              },
            },
            {
              key: "getSuggestions",
              value: function (e) {
                (this.searchSuggestions = []),
                  fetch(
                    ""
                      .concat(this.countryUrlPrefix, "/search-terms?q=")
                      .concat(e)
                  )
                    .then((e) => e.json())
                    .then((e) => {
                      (this.searchSuggestions = e.suggestions || []),
                        (this.searchSuggestInput.value = decodeURI(
                          e.suggestion
                        )),
                        this.renderSuggestions();
                    });
              },
            },
            {
              key: "renderSuggestions",
              value: function () {
                this.injectFlyout();
                var e = this.searchWrapper.querySelector(
                    '[data-suggestion="results"]'
                  ),
                  t = this.searchQueryInput.value.replace(
                    /[^\w. ]/gi,
                    function (e) {
                      return "&#" + e.charCodeAt(0) + ";";
                    }
                  ),
                  s = (e) => {
                    var t =
                      '\n              <a \n                data-suggestion="item" \n                class="tw-py-3 tw-px-4 tw-text-sm tw-block tw-truncate {{class}}" \n                href="{{href}}" \n                title="{{title}}" \n                data-type="{{datatype}}">\n                  {{text}}\n              </a>';
                    return (
                      ["title", "text", "href", "class", "datatype"].forEach(
                        (s) => {
                          t = t.replace("{{".concat(s, "}}"), e[s]);
                        }
                      ),
                      t
                    );
                  },
                  r = (e) => {
                    var t = new RegExp(
                      this.searchQueryInput.value.replace(
                        /[^a-zA-z0-9ÄÜÖÀÂÈÉÊËÎÏÔŒÙÛŸÇĎŇŤŠČŘŽÝÁÍÚŮäüößàâèéêëîïôœùûÿçěščřžýáíóúůďťň]/g,
                        " "
                      ),
                      "gi"
                    );
                    return this.searchQueryInput.value
                      ? e.replace(t, '<span class="tw-font-bold">$&</span>')
                      : e;
                  },
                  a = ['<ul class="suggestions">'];
                a.push(
                  s({
                    title: t,
                    text: t,
                    href: ""
                      .concat(this.countryUrlPrefix, "/search/")
                      .concat(encodeURIComponent(this.searchQueryInput.value)),
                    class: "tw-bg-white",
                    datatype: "userinput",
                  })
                ),
                  this.searchSuggestions.forEach((e) => {
                    a.push(
                      s({
                        title: e,
                        text: r(e),
                        href: ""
                          .concat(this.countryUrlPrefix, "/search/")
                          .concat(encodeURIComponent(e)),
                        class: "",
                        datatype: "suggestion",
                      })
                    );
                  }),
                  a.push("</ul>"),
                  (e.innerHTML = a.join("")),
                  this.searchWrapper
                    .querySelectorAll('[data-suggestion="item"]')
                    .forEach((e) => {
                      e.addEventListener("mouseenter", (e) =>
                        this.onAutoSuggestItemMouseEnter(e)
                      ),
                        e.addEventListener("mousemove", (e) =>
                          this.onAutoSuggestItemMouseEnter(e)
                        ),
                        e.addEventListener("click", (e) => {
                          (document.cookie = "isi=true; path=/"),
                            (document.cookie = "queryFromSuggest=true; path=/");
                        });
                    }),
                  this.showFlyout();
              },
            },
            {
              key: "getAdditionalResults",
              value: function (e) {
                window.innerWidth < 960 ||
                  fetch(
                    ""
                      .concat(this.countryUrlPrefix, "/search-flyout?q=")
                      .concat(e)
                  )
                    .then((e) => e.json())
                    .then((e) => {
                      this.renderAdditionalResults(e);
                    });
              },
            },
            {
              key: "renderAdditionalResults",
              value: function (e) {
                this.injectFlyout();
                var t = this.searchWrapper.querySelector(
                  '[data-suggestion="additional"]'
                );
                if (!e.isAdditional && e.noAdditionalResultText)
                  t.innerHTML =
                    '<p class="headr__suggestion__no-additional-results__text">' +
                    e.noAdditionalResultText +
                    "</p>";
                else {
                  var s = e.html
                    .replace(
                      /normal icons-link-arrow-black wt_ignore/g,
                      "headr__suggestion__teaser-link"
                    )
                    .replace(/rating/g, "headr__rating")
                    .replace(/row-fluid/g, "tw-flex tw-w-full tw-mb-5")
                    .replace(
                      /"image-container"/g,
                      '"headr__suggestion__image-container"'
                    )
                    .replace(/"image"/g, '"headr__suggestion__image"')
                    .replace(
                      /button button--orange button--dskp-min-width button--mb-width-100/g,
                      "tw-float-right tw-mb-5 tw-px-3 tw-py-2 tw-border-0 tw-shadow tw-rounded tw-text-white tw-font-obi-bold tw-text-lg tw-bg-orange"
                    )
                    .replace(/"\/\//g, "https://")
                    .replace(/\bsuggestion__/g, "headr__suggestion__");
                  t.innerHTML = s;
                }
                (this.searchWtParam = e.webtrekk), this.showFlyout();
              },
            },
            {
              key: "submitEvents",
              value: function () {
                this.searchForm.addEventListener("submit", (e) => {
                  e.preventDefault(), (window.inSearch = !0);
                  var t = this.searchQueryInput.value
                    .replace(/\?/g, " ")
                    .replace(/\//g, " ")
                    .replace(/\\/g, " ")
                    .replace(/^\.{1,2}$/g, "")
                    .toLowerCase();
                  "" !== t &&
                    (this.trackEvent("generic", {
                      interaction: {
                        interactionId: "search.searchfield.performed",
                      },
                      search: { searchFlyoutElements: this.getWtParam() },
                    }),
                    (document.cookie = "isi=true; path=/"),
                    this.searchQueryInput.setAttribute("disabled", "disabled"),
                    this.searchButton.setAttribute("disabled", "disabled"),
                    (window.location.href = ""
                      .concat(this.countryUrlPrefix, "/search/")
                      .concat(encodeURIComponent(t))));
                });
              },
            },
            {
              key: "keyboardEvents",
              value: function () {
                this.searchQueryInput.addEventListener("keydown", (e) => {
                  "Tab" === e.code &&
                    this.searchSuggestInput.value &&
                    this.searchQueryInput.value !==
                      this.searchSuggestInput.value &&
                    (e.preventDefault(),
                    (this.searchQueryInput.value =
                      this.searchSuggestInput.value),
                    this.getAdditionalResults(this.searchQueryInput.value));
                });
                var e,
                  t = (e) => {
                    var t = -1,
                      s = Array.from(
                        this.searchWrapper.querySelectorAll(
                          '[data-suggestion="item"]'
                        )
                      );
                    s.length &&
                      (s.forEach((e, s) => {
                        e.classList.contains("tw-bg-white") &&
                          ((t = s), e.classList.remove("tw-bg-white"));
                      }),
                      "ArrowDown" === e
                        ? ++t >= s.length && (t = 0)
                        : "ArrowUp" === e && --t < 0 && (t = s.length - 1),
                      s.forEach((e, s) => {
                        t === s &&
                          (e.classList.add("tw-bg-white"),
                          (this.searchQueryInput.value =
                            e.getAttribute("title")),
                          (this.searchSuggestInput.value = ""),
                          this.getAdditionalResults(
                            this.searchQueryInput.value
                          ));
                      }));
                  };
                this.searchQueryInput.addEventListener("keyup", (s) => {
                  if ("ArrowUp" === s.code || "ArrowDown" === s.code) t(s.code);
                  else if ("Escape" === s.code) this.resetSearch();
                  else if ("Enter" !== s.code)
                    return (
                      (this.searchSuggestInput.value = ""),
                      (this.searchWtParam = ""),
                      (this.searchSuggestions = []),
                      void (this.searchQueryInput.value.length > 2 &&
                      this.searchQueryInput.value.length < 21 &&
                      1 !== window.searchIntegrationTest
                        ? (window.clearTimeout(e),
                          (e = window.setTimeout(() => {
                            window.clearTimeout(e),
                              this.getSuggestions(this.searchQueryInput.value),
                              this.getAdditionalResults(
                                this.searchQueryInput.value
                              );
                          }, 240)))
                        : this.searchQueryInput.value.length < 3 &&
                          this.hideFlyout())
                    );
                });
              },
            },
            {
              key: "mouseEvents",
              value: function () {
                this.searchResetButton.addEventListener("click", (e) => {
                  e.preventDefault(), this.resetSearch();
                }),
                  this.searchWrapper.addEventListener("click", (e) => {
                    var t = e.target.closest("[data-type]");
                    if (t) {
                      var s = t.dataset.type;
                      this.trackEvent("generic", {
                        interaction: {
                          interactionId: "search.searchflyout.".concat(s),
                        },
                        search: { searchFlyoutElements: this.getWtParam() },
                      });
                    }
                  });
              },
            },
            {
              key: "onAutoSuggestItemMouseEnter",
              value: function (e) {
                var t = e.currentTarget;
                t.classList.contains("tw-bg-white") ||
                  (this.searchWrapper
                    .querySelectorAll('[data-suggestion="item"].tw-bg-white')
                    .forEach((e) => {
                      e.classList.remove("tw-bg-white");
                    }),
                  t.classList.add("tw-bg-white"),
                  window.clearTimeout(this.mouseTimeout),
                  (this.mouseTimeout = window.setTimeout(() => {
                    this.getAdditionalResults(t.getAttribute("title"));
                  }, 200)));
              },
            },
            {
              key: "trackEvent",
              value: function (e, t) {
                this.searchWrapper.dispatchEvent(
                  new CustomEvent("metricsApi.trackEvent", {
                    detail: { event: e, data: t },
                    bubbles: !0,
                  })
                );
              },
            },
            {
              key: "getWtParam",
              value: function () {
                return this.searchSuggestions.length
                  ? this.searchWtParam
                    ? "suggestions."
                        .concat(this.searchSuggestions.length, ";userinput.1;")
                        .concat(this.searchWtParam)
                    : "suggestions.".concat(
                        this.searchSuggestions.length,
                        ";userinput.1;assortment.0;category.0;adviser.0;landingpage.0;banner.0"
                      )
                  : "notloaded";
              },
            },
          ]),
          s
        );
      })(s(3).default);
    },
  },
]);
