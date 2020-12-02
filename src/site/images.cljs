(ns site.images)

(def img-list ["cello.jpg" "cello-lesson2.jpg" "cello-lesson.jpg" "phil-beer.jpg" "shayla.jpg"   "younguuns.jpg"])

(defn random-img []
  (str "/images/" (rand-nth img-list)))
