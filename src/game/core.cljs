(ns game.core
  (:require [reagent.core :as r]))

(def initial-owners [nil nil nil
                     nil nil nil
                     nil nil nil] )

(def state (r/atom {:owners initial-owners
                    :turn "X"}))

(defn place-owner [p]
  ((:owners @state) p))

(defn line-owner [[p1 p2 p3]]
  (let [owner1 (place-owner p1)
        owner2 (place-owner p2)
        owner3 (place-owner p3)]
    (when (= owner1 owner2 owner3)
      owner1)))

(defn winner []
  (let [possible-lines [[0 1 2]
                        [3 4 5]
                        [6 7 8]
                        [0 3 6]
                        [1 4 7]
                        [2 5 8]
                        [0 4 8]
                        [2 4 6]]]
    (reduce
     #(when-let [winning-player (line-owner %2)]
        (reduced winning-player))
     nil
     possible-lines)))

(defn game-over []
  (or (winner) (every? place-owner (range 9))))

(defn new-owner [] (:turn @state))

(defn new-turn []
  (if (= (:turn @state) "X")
    "O"
    "X"))

(defn reset-owners []
  initial-owners)

(defn handle-turn [i]
  (when (game-over)
    (swap! state update-in [:owners] reset-owners))
  (when-not (place-owner i)
    (swap! state update-in [:owners i] new-owner)
    (swap! state update-in [:turn] new-turn)))

(defn square [i]
  [:button.square {:on-click #(handle-turn i)} ((:owners @state) i)])

(defn get-status []
  (if (game-over)
    (let [winning-player (winner)]
      (if winning-player
        (str "Winner: " winning-player)
        (str "Draw")))
    (str "Next player: " (:turn @state))))

(defn board []
  (let [status (get-status)]
    [:<>
     [:div.status status]
     [:div.board-row
      [square 0]
      [square 1]
      [square 2]]
     [:div.board-row
      [square 3]
      [square 4]
      [square 5]]
     [:div.board-row
      [square 6]
      [square 7]
      [square 8]]]))

(defn ^:export game []
  [:div.game
   [:div.game-board
    [board]]
   [:div.game-info
    [:div] [:ol]]])

(defn ^:dev/after-load start
  []
  (r/render
   [game]
   (.getElementById js/document "app")))

(defn init []
  (start))
