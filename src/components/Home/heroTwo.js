import React from "react"
// import { Link } from "gatsby"

// //all local file import
// import WordpressImage from "../../images/blog/Wordpress_unsplash.jpg"
// import VpnImage from "../../images/blog/vpn.jpg"

const hero = () => {
  return (
    <div className="pb-10">
      <section className="w-11/12 lg:w-8/12 mx-auto pb-5">
        <div className="grid grid-cols-3 grid-rows-3 gap-2">
          <div className="bg-green-500 col-span-1">a</div>
          <div className="bg-indigo-500 row-span-2">d</div>
          <div className="bg-cyan-500 row-span-2 ">c</div>
          <div className="bg-red-500 row-span-1">b</div>
        </div>
      </section>
    </div>
  )
}
export default hero
