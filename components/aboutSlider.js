import Box from "@mui/material/Box";
import Slider from "react-slick";
import Image from "next/image";

/*** previous resource ***/
import i1 from "../public/IMGs/aboutSlider/01.jpeg";
import i2 from "../public/IMGs/aboutSlider/02.jpeg";
import i3 from "../public/IMGs/aboutSlider/03.jpeg";
import i4 from "../public/IMGs/aboutSlider/04.jpeg";
import i5 from "../public/IMGs/aboutSlider/05.jpeg";
import i6 from "../public/IMGs/aboutSlider/06.jpeg";
import i7 from "../public/IMGs/aboutSlider/07.jpeg";
import i8 from "../public/IMGs/aboutSlider/08.jpeg";
import i9 from "../public/IMGs/aboutSlider/09.jpeg";
import i10 from "../public/IMGs/aboutSlider/10.jpeg";

export default function AboutSlider({ children }) {
  /** react-slick setting **/
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    //cssEase: "linear",
  };

  return (
    <>
      <Box
      // sx={{
      //   width: { xs: "90%", md: "20%" },
      //   height: 400,
      //   backgroundColor: "yellow",
      // }}
      // ml={"auto"}
      // mr={"auto"}
      >
        <Slider {...settings}>
          <Box>
            <Image
              src={i1}
              placeholder="blur"
              blurDataURL={i1}
              alt="image of about"
              objectFit="contain"
              objectPosition="center"
              width={1035}
              height={400}
            />
            <Box
              sx={{
                width: "300px",
                textAlign: "center",
                fontFamily: "Noto Sans TC",
                fontSize: { xs: 14, sm: 16 },
                lineHeight: { xs: "28px", sm: "32px" },
              }}
              ml={"auto"}
              mr={"auto"}
              mt={2}
            >
              創辦人洪建全
            </Box>
            <Box
              sx={{
                width: "300px",
                textAlign: "center",
                fontFamily: "Helvetica",
                fontSize: { xs: 12, sm: 14 },
                lineHeight: { xs: "18px", sm: "21px" },
              }}
              ml={"auto"}
              mr={"auto"}
              mb={2}
            >
              Founder Hong Chienchuan (C.C.)
            </Box>
          </Box>
          <Box>
            <Image
              src={i2}
              placeholder="blur"
              blurDataURL={i2}
              alt="image of about"
              objectFit="contain"
              objectPosition="center"
              width={1035}
              height={400}
            />
            <Box
              sx={{
                width: "300px",
                textAlign: "center",
                fontFamily: "Noto Sans TC",
                fontSize: { xs: 14, sm: 16 },
                lineHeight: { xs: "28px", sm: "32px" },
              }}
              ml={"auto"}
              mr={"auto"}
              mt={2}
            >
              1972-1981 | 書評書目
            </Box>
            <Box
              sx={{
                width: "300px",
                textAlign: "center",
                fontFamily: "Helvetica",
                fontSize: { xs: 12, sm: 14 },
                lineHeight: { xs: "18px", sm: "21px" },
              }}
              ml={"auto"}
              mr={"auto"}
              mb={2}
            >
              Shu Ping Shu Mu Review of Books and Bibliography magazine
            </Box>
          </Box>
          <Box>
            <Image
              src={i3}
              placeholder="blur"
              blurDataURL={i3}
              alt="image of about"
              objectFit="contain"
              objectPosition="center"
              width={1035}
              height={400}
            />
            <Box
              sx={{
                width: "300px",
                textAlign: "center",
                fontFamily: "Noto Sans TC",
                fontSize: { xs: 14, sm: 16 },
                lineHeight: { xs: "28px", sm: "32px" },
              }}
              ml={"auto"}
              mr={"auto"}
              mt={2}
            >
              1974-1992 | 洪建全兒童文學創作獎
            </Box>
            <Box
              sx={{
                width: "300px",
                textAlign: "center",
                fontFamily: "Helvetica",
                fontSize: { xs: 12, sm: 14 },
                lineHeight: { xs: "18px", sm: "21px" },
              }}
              ml={"auto"}
              mr={"auto"}
              mb={2}
            >
              The Hong Foundation Award For Children’s Literature
            </Box>
          </Box>
          <Box>
            <Image
              src={i4}
              placeholder="blur"
              blurDataURL={i4}
              alt="image of about"
              objectFit="contain"
              objectPosition="center"
              width={1035}
              height={400}
            />
            <Box
              sx={{
                width: "300px",
                textAlign: "center",
                fontFamily: "Noto Sans TC",
                fontSize: { xs: 14, sm: 16 },
                lineHeight: { xs: "28px", sm: "32px" },
              }}
              ml={"auto"}
              mr={"auto"}
              mt={2}
            >
              1975-1989 | 視聽圖書館
            </Box>
            <Box
              sx={{
                width: "300px",
                textAlign: "center",
                fontFamily: "Helvetica",
                fontSize: { xs: 12, sm: 14 },
                lineHeight: { xs: "18px", sm: "21px" },
              }}
              ml={"auto"}
              mr={"auto"}
              mb={2}
            >
              The Hong Foundation Audiovisual Library
            </Box>
          </Box>
          <Box>
            <Image
              src={i5}
              placeholder="blur"
              blurDataURL={i5}
              alt="image of about"
              objectFit="contain"
              objectPosition="center"
              width={1035}
              height={400}
            />
            <Box
              sx={{
                width: "300px",
                textAlign: "center",
                fontFamily: "Noto Sans TC",
                fontSize: { xs: 14, sm: 16 },
                lineHeight: { xs: "28px", sm: "32px" },
              }}
              ml={"auto"}
              mr={"auto"}
              mt={2}
            >
              1977 | 陳達《民族樂手陳達和他的歌》
            </Box>
            <Box
              sx={{
                width: "300px",
                textAlign: "center",
                fontFamily: "Helvetica",
                fontSize: { xs: 12, sm: 14 },
                lineHeight: { xs: "18px", sm: "21px" },
              }}
              ml={"auto"}
              mr={"auto"}
              mb={2}
            >
              Chen Da’s A Folk Musician: Chen Da and His Songs
            </Box>
          </Box>
          <Box>
            <Image
              src={i6}
              placeholder="blur"
              blurDataURL={i6}
              alt="image of about"
              objectFit="contain"
              objectPosition="center"
              width={1035}
              height={400}
            />
            <Box
              sx={{
                width: "300px",
                textAlign: "center",
                fontFamily: "Noto Sans TC",
                fontSize: { xs: 14, sm: 16 },
                lineHeight: { xs: "28px", sm: "32px" },
              }}
              ml={"auto"}
              mr={"auto"}
              mt={2}
            >
              1984-1995 | 文經學苑
            </Box>
            <Box
              sx={{
                width: "300px",
                textAlign: "center",
                fontFamily: "Helvetica",
                fontSize: { xs: 12, sm: 14 },
                lineHeight: { xs: "18px", sm: "21px" },
              }}
              ml={"auto"}
              mr={"auto"}
              mb={2}
            >
              The Culture and Business Academy
            </Box>
          </Box>
          <Box>
            <Image
              src={i7}
              placeholder="blur"
              blurDataURL={i7}
              alt="image of about"
              objectFit="contain"
              objectPosition="center"
              width={1035}
              height={400}
            />
            <Box
              sx={{
                width: "300px",
                textAlign: "center",
                fontFamily: "Noto Sans TC",
                fontSize: { xs: 14, sm: 16 },
                lineHeight: { xs: "28px", sm: "32px" },
              }}
              ml={"auto"}
              mr={"auto"}
              mt={2}
            >
              1987 - |素直友會
            </Box>
            <Box
              sx={{
                width: "300px",
                textAlign: "center",
                fontFamily: "Helvetica",
                fontSize: { xs: 12, sm: 14 },
                lineHeight: { xs: "18px", sm: "21px" },
              }}
              ml={"auto"}
              mr={"auto"}
              mb={2}
            >
              Taiwan Sunao Community
            </Box>
          </Box>
          <Box>
            <Image
              src={i8}
              placeholder="blur"
              blurDataURL={i8}
              alt="image of about"
              objectFit="contain"
              objectPosition="center"
              width={1035}
              height={400}
            />
            <Box
              sx={{
                width: "300px",
                textAlign: "center",
                fontFamily: "Noto Sans TC",
                fontSize: { xs: 14, sm: 16 },
                lineHeight: { xs: "28px", sm: "32px" },
              }}
              ml={"auto"}
              mr={"auto"}
              mt={2}
            >
              1995 - | 敏隆講堂
            </Box>
            <Box
              sx={{
                width: "300px",
                textAlign: "center",
                fontFamily: "Helvetica",
                fontSize: { xs: 12, sm: 14 },
                lineHeight: { xs: "18px", sm: "21px" },
              }}
              ml={"auto"}
              mr={"auto"}
              mb={2}
            >
              Minlong Forum
            </Box>
          </Box>
          <Box>
            <Image
              src={i9}
              placeholder="blur"
              blurDataURL={i9}
              alt="image of about"
              objectFit="contain"
              objectPosition="center"
              width={1035}
              height={400}
            />
            <Box
              sx={{
                width: "300px",
                textAlign: "center",
                fontFamily: "Noto Sans TC",
                fontSize: { xs: 14, sm: 16 },
                lineHeight: { xs: "28px", sm: "32px" },
              }}
              ml={"auto"}
              mr={"auto"}
              mt={2}
            >
              2007 - | 覓計畫
            </Box>
            <Box
              sx={{
                width: "300px",
                textAlign: "center",
                fontFamily: "Helvetica",
                fontSize: { xs: 12, sm: 14 },
                lineHeight: { xs: "18px", sm: "21px" },
              }}
              ml={"auto"}
              mr={"auto"}
              mb={2}
            >
              Project Seek
            </Box>
          </Box>
          <Box>
            <Image
              src={i10}
              placeholder="blur"
              blurDataURL={i10}
              alt="image of about"
              objectFit="contain"
              objectPosition="center"
              width={1035}
              height={400}
            />
            <Box
              sx={{
                width: "300px",
                textAlign: "center",
                fontFamily: "Noto Sans TC",
                fontSize: { xs: 14, sm: 16 },
                lineHeight: { xs: "28px", sm: "32px" },
              }}
              ml={"auto"}
              mr={"auto"}
              mt={2}
            >
              2018 - | 銅鐘藝術賞
            </Box>
            <Box
              sx={{
                width: "300px",
                textAlign: "center",
                fontFamily: "Helvetica",
                fontSize: { xs: 12, sm: 14 },
                lineHeight: { xs: "18px", sm: "21px" },
              }}
              ml={"auto"}
              mr={"auto"}
              mb={2}
            >
              Tung Chung Prize
            </Box>
          </Box>
        </Slider>
      </Box>
    </>
  );
}
