(ns site.views.content
  (:require [re-frame.core :as rf]
            [site.menu-items :refer [items tunes]]
            [site.images :refer [random-img]]))

(defn anchor [ref text]
  [:a {:href ref :class "font-medium text-gray-700 underline"} text])

(defn anchor-list-item [ref text]
  ^{:key ref} [:p {:class "mt-3"} (anchor ref text)])

(defn menu-item-page [active-id]
  [:<>
   [:h2 {:class "text-2xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-3xl sm:leading-none md:text-4xl lg:text-3xl xl:text-4xl"} (get-in items [active-id :caption])]
   [:div {:class "mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl"}
    (get-in items [active-id :description])]
   (for [{:keys [ref text]} (get-in items [active-id :links])]
     (anchor-list-item ref text))
   (when-let [tunes (get-in items [active-id :tunes])]
     (for [{:keys [ref title]} (vals tunes)]
       (anchor-list-item ref title)))])

(defn tunes-page [active-id]
  [:<>
   [:h2 {:class "text-2xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-3xl sm:leading-none md:text-4xl lg:text-3xl xl:text-4xl"} (get-in tunes [active-id :title])]
   [:div {:class "mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl"}
    (for [{:keys [ref text]} (get-in tunes [active-id :links])]
      (anchor-list-item ref text))]])

(defn is-tunes-page [page-id]
  (#{:treble-clef :bass-clef :b-flat} page-id))

(defn active-page []
  (let [active-id @(rf/subscribe [:active-page])
        image (random-img)]
    [:div {:class "relative bg-gray-50"}
     [:main {:class "lg:relative"}
      [:div {:class "mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left"}
       [:div {:class "px-4 lg:w-1/2 sm:px-8 xl:pr-16"}
        (if (is-tunes-page active-id)
          [tunes-page active-id]
          [menu-item-page active-id])]]
      [:div {:class "relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full"}
       [:img {:class "absolute inset-0 w-full h-full object-cover" :src image :alt image}]]]]))

