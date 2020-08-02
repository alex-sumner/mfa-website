(ns site.core
  (:require [reagent.core :as r]))

(defn navbar []
  [:div {:data-collapse "small", :data-animation "default", :data-duration "400", :role "banner", :class "navbar w-nav"}
   [:div {:class "container-2 w-container"}
    [:a {:href "#", :class "w-nav-brand"}
     [:div {:class "text-block"} "Music For All"]]
    [:nav {:role "navigation", :class "w-nav-menu"}
     [:a {:href "#", :class "nav-link w-nav-link", :style {:max-width "728px"}} "Home"]
     [:a {:href "#", :class "nav-link w-nav-link", :style {:max-width "728px"}} "About"]
     [:a {:href "#", :class "nav-link w-nav-link", :style {:max-width "728px"}} "Contact"]]
    [:div {:class "w-nav-button", :style {:-webkit-user-select "text"}, :aria-label "menu", :role "button", :tabIndex "0",
           :aria-controls "w-nav-overlay-0", :aria-haspopup "menu", :aria-expanded "false"}
      [:div {:class "w-icon-nav-menu"}]
     ]]
    [:div {:class "w-nav-overlay", :data-wf-ignore "", :id "w-nav-overlay-0"}]
   ])

(defn slider []
  [:div {:data-animation "slide", :data-duration "500", :data-infinite "1", :class "slider w-slider"}
   [:div {:class "mask w-slider-mask"}
    [:div {:class "slide slide1 w-slide", :style {:transform "translateX(0px)" :opacity 1}}
     [:h1 {:class "heading-3"} "Welcome to the Music For All website!"]]
    [:div {:class "w-slide", :style {:transform "translateX(0px)" :opacity 1}}]]
   [:div {:class "w-slider-arrow-left"}
    [:div {:class "w-icon-slider-left"}]]
   [:div {:class "w-slider-arrow-right"}
    [:div {:class "w-icon-slider-right"}]]
   [:div {:class "w-slider-nav w-round"}
    [:div {:class "w-slider-dot w-active", :data-wf-ignore ""}]
    [:div {:class "w-slider-dot", :data-wf-ignore ""}]]])

(defn desc []
  [:div {:class "section-2"}
   [:div {:class "container-3 w-container"}
    [:p {:class "paragraph"} "Music For All is a community project based in Lancashire which aims to make musical activities accessible to everyone. "]]])

(defn three-cols []
  [:div {:class "section"}
   [:div {:class "container-4 w-container"}
    [:div {:class "div-block-3"}
     [:img {:src "/images/st-georges-concert1.jpg", :alt ""}]
     [:h1 {:class "_3colheading"} "Music Group"]
     [:p {:class "_3colpara"} "Any instrument is welcome to this session, and players of any age, experience and ability are all welcome and catered for."]]
    [:div {:class "div-block-3"}
     [:img {:src "/images/cello.jpg", :alt ""}]
     [:h1 {:class "_3colheading"} "Instrument Loan"]
     [:p {:class "_3colpara"} "We run a free instrument loan scheme giving people the chance to play a wide variety of instruments ranging from cellos to glockenspiels."]]
    [:div {:class "div-block-3"}
     [:img {:src "/images/cello-lesson.jpg", :alt ""}]
     [:h1 {:class "_3colheading"} "Strings in Schools"]
     [:p {:class "_3colpara"} "We have found some great violin and cello teachers who have set up lessons during and after school hours."]]]])

(defn ^:export app []
  [:div.app
   (navbar)
   (slider)
   (desc)
   (three-cols)])

(defn ^:dev/after-load start
  []
  (r/render
   [app]
   (.getElementById js/document "app")))

(defn init []
  (start))
