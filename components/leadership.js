import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";

const Leadership = ({ leadership: dataset }) => {
  /** sorting dataset by id **/
  !dataset ? null : dataset.sort((a, b) => a.id - b.id);

  /** (leaders) filting dataset by job_title.id **/
  const leaders = dataset.filter(function (leadership) {
    return leadership.job_title.id !== 6;
  });

  /** (boardMembers) filting dataset by job_title.id **/
  const boardMembers = dataset.filter(function (leadership) {
    return leadership.job_title.id == 6;
  });

  /** react-slick setting **/
  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "400px",
    slidesToShow: 1,
    //slidesToScroll: 2.5,
    speed: 500,
    /*afterChange: () =>
      this.setState((state) => ({ updateCount: state.updateCount + 1 })),
    beforeChange: (current, next) => this.setState({ slideIndex: next }),*/
  };

  return (
    <>
      <Box ml={0} mr={0}>
        <Box ml={0} mr={0}>
          <Slider {...settings}>
            {leaders &&
              leaders.map((leader) => (
                <div key={leader.id}>
                  <Box sx={{ backgroundColor: "#666" }}>
                    <Typography mb={2} sx={{ fontSize: 15 }} component="div">
                      <Box component="span" sx={{ fontWeight: 700 }}>
                        {leader.job_title.tw}
                      </Box>
                      <Box component="span" sx={{ fontWeight: 500 }} ml={1}>
                        {leader.job_title.en}
                      </Box>
                    </Typography>
                    <Typography sx={{ fontSize: 20, fontWeight: 500 }}>
                      <Box>
                        <Box component="div">{leader.name.tw}</Box>
                        <Box component="div">{leader.name.en}</Box>
                      </Box>
                    </Typography>
                  </Box>
                </div>
              ))}
          </Slider>
        </Box>
      </Box>
    </>
  );
};

export default Leadership;

/*
const Leadership = ({ leadership: dataset }) => {
  
  !dataset ? null : dataset.sort((a, b) => a.id - b.id);

 
  const leaders = dataset.filter(function (leadership) {
    return leadership.job_title.id !== 6;
  });

 
  const boardMembers = dataset.filter(function (leadership) {
    return leadership.job_title.id == 6;
  });


  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "400px",
    slidesToShow: 1,
    //slidesToScroll: 2.5,
    speed: 500,
    afterChange: () =>
      this.setState((state) => ({ updateCount: state.updateCount + 1 })),
    beforeChange: (current, next) => this.setState({ slideIndex: next }),
  };

  return (
    <>
      <Box ml={0} mr={0}>
        <Box ml={0} mr={0}>
          <input
            onChange={(e) => this.slider.slickGoTo(e.target.value)}
            value={this.state.slideIndex}
            type="range"
            min={0}
            max={3}
          />
          <Slider ref={(slider) => (this.slider = slider)} {...settings}>
            {leaders &&
              leaders.map((leader) => (
                <div>
                  <Box key={leader.id} sx={{ backgroundColor: "#666" }}>
                    <Typography mb={2} sx={{ fontSize: 15 }} component="div">
                      <Box component="span" sx={{ fontWeight: 700 }}>
                        {leader.job_title.tw}
                      </Box>
                      <Box component="span" sx={{ fontWeight: 500 }} ml={1}>
                        {leader.job_title.en}
                      </Box>
                    </Typography>
                    <Typography sx={{ fontSize: 20, fontWeight: 500 }}>
                      <Box>
                        <Box component="div">{leader.name.tw}</Box>
                        <Box component="div">{leader.name.en}</Box>
                      </Box>
                    </Typography>
                  </Box>
                </div>
              ))}
          </Slider>
        </Box>
      </Box>
    </>
  );
};

export default Leadership;
*/

/*
<Typography mb={2} sx={{ fontSize: 15 }} component="div">
                    <Box component="span" sx={{ fontWeight: 700 }}>
                      {leader.job_title.tw}
                    </Box>
                    <Box component="span" sx={{ fontWeight: 500 }} ml={1}>
                      {leader.job_title.en}
                    </Box>
                  </Typography>
                  <Typography sx={{ fontSize: 20, fontWeight: 500 }}>
                    <Box>
                      <Box component="div">{leader.name.tw}</Box>
                      <Box component="div">{leader.name.en}</Box>
                    </Box>
                  </Typography>


<Box
                  sx={{ width: 100, height: 100, backgroundColor: "#666" }}
                />
<Box>
          {boardMembers &&
            boardMembers.map((boardMember) => (
              <div key={boardMember.id}>
                <div>{boardMember.id}</div>
                <div>{boardMember.name.tw}</div>
                <div>{boardMember.name.en}</div>
              </div>
            ))}
        </Box>

        <Card key={leader.id} sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          <Box component="span">{leader.job_title.tw}</Box>
                          <Box component="span">{leader.job_title.en}</Box>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          <Box>
                            <Box component="span">{leader.name.tw}</Box>
                            <Box component="span">{leader.name.en}</Box>
                          </Box>
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
*/
