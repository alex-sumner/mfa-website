(ns site.router
  (:require [reitit.core :as re]
            [pushy.core :as pushy]
            [re-frame.core :as rf]))

(def router
  (re/router
   [["/" :home]
    ["/music-group" :music-group]
    ["/instrument-loan" :instrument-loan]
    ["/strings-in-schools" :strings-in-schools]
    ["/sheet-music" :sheet-music]
    ["/soundcloud" :soundcloud]
    ["/facebook" :facebook]
    ["/treble-clef" :treble-clef]
    ["/bass-clef" :bass-clef]
    ["/b-flat" :b-flat]])) 

(def history
  (let [dispatch #(rf/dispatch [:route-changed %])
        match #(->
                (re/match-by-path router %)
                :data
                :name)]
    (pushy/pushy dispatch match)))

(defn start!
  []
  (pushy/start! history))

(defn path-for
  [route]
  (:path (re/match-by-name router route)))

(defn set-token!
  [token]
  (pushy/set-token! history token))
