import { useEffect, useState } from "react";
import netflixBannerLogo from "../../assets/image/logo.png";
import styles from "./Banner.module.css";
import {Play, Info} from "lucide-react"
import { movieInstance } from "../Utility/MovieInstances";
import requests from "../Utility/requestUrls";
const BANNER_BASE = "https://image.tmdb.org/t/p/original/";

function Banner() {
const [bannerImage, setBannerImage] =useState({})


useEffect (() =>{
  async function fetchBannerImage() {
    const request = await movieInstance.get(requests.fetchNetflixOriginals)
    setBannerImage(request.data.results[Math.floor(Math.random()*request?.data?.results?.length)],
  );
  }
  fetchBannerImage()
}, [])




  // useEffect(() => {
  //   async function fetchBannerImage() {
  //     const request = await movieInstance.get(requests.fetchNetflixOriginals);
  //     console.log(request);
  //     setBannerImage(
  //       request.data.results[
  //         Math.floor(Math.random() * request.data.results.length)
  //       ],
  //     );
  //   }
  //   fetchBannerImage();
  // }, []);




function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}





  return (
    <div
      className={styles.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${BANNER_BASE}${bannerImage.backdrop_path}")`,
      }}
    >
      <div className={styles.content}>
        <img
          className={styles.logoImg}
          src={netflixBannerLogo}
          alt="Netflix Banner Logo"
        />
        {/* title */}
        <h1 className={styles.title}>
          {bannerImage?.original_name}
        </h1>
        {/* /* description */}
        <h1 className={styles.discription}>
          {truncate(bannerImage?.overview, 120)}
        </h1>
        {/* buttons */}
        <div>
          <button>
            <Play size={20} />
            play
          </button>
          <button>
            <Info size={20} />
            My list
          </button>
        </div>
        {/* fadding */}
        <div></div>
      </div>
    </div>
  );
}

export default Banner;


