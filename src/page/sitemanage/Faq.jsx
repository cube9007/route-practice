import * as React from 'react';
import { Link } from "react-router-dom";
import { Tabs, Tab, Typography, Box, Accordion, AccordionSummary, AccordionDetails, Avatar, TextField, InputBase, IconButton } from "@mui/material";
import PropTypes from 'prop-types';
import { ExpandMore, Search } from '@material-ui/icons';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const FontColor = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [expanded, setExpanded] = React.useState(false);

  const handleChange2 = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

    return (
      <>
        <h1>
          <Link to="/" > RMS </Link>
        </h1>
        
        <div>
          <Box sx={{ width: '100%' }}>
            {/* 서치 바 */}
            {/* <Box width="100vw" height="215px" display="flex" alignItems="center" justifyContent="center">
              <TextField label="Search..." style={{ borderRadius:'4px 0 0 4px', border: '1px solid #666', height: '26px' }} /> 
              <Box borderRadius="0 4px 4px 0 " bgcolor="#F3702A" display="flex" width="56px" height="56px" justifyContent="center" alignItems="center" color="white"> <Search/> </Box>
            </Box> */}
            <Box width="100vw" height="215px" display="flex" alignItems="center" justifyContent="center">
              <InputBase
                sx={{ border: '1px solid #ddd', paddingLeft: '20px', height: '56px', width: '620px', borderRadius: '4px 0 0 4px' }}
                placeholder="Search Google Maps"
                inputProps={{ 'aria-label': 'search google maps' }}
              />
              <IconButton type="submit" sx={{ height: '56px', width: '56px', borderRadius: '0 4px 4px 0', bgcolor: '#F3702A', color: 'white' }} aria-label="search">
                <Search />
              </IconButton>
            </Box>

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} display="flex" justifyContent="center">
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="전체" {...a11yProps(0)} />
                <Tab label="로그인 / 회원가입" {...a11yProps(1)} />
                <Tab label="단체 가입" {...a11yProps(2)} />
                <Tab label="관광지" {...a11yProps(3)} />
                <Tab label="관광 콘텐츠" {...a11yProps(4)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange2('panel1')}>
                <AccordionSummary style={{marginRight: '25px'}}
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Box alignItems="center" display="flex" height="82px">
                    <Typography style={{ marginLeft: '40px', marginRight: '40px' }} color="#666666">  5 </Typography>
                    <Avatar sx={{ bgcolor:"#F3702A", width: '32px', height: '32px'}}>Q</Avatar>
                    <Typography style={{ marginLeft: '25px' }} fontWeight="bold" > 전체 </Typography>
                    <Typography style={{ marginLeft: '50px' }} > 일반 회원가입은 어떻게 하나요? </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Box alignItems="center" display="flex" mb="25px">
                    <Avatar sx={{ bgcolor:"white", border:"1px solid #F3702A", color:"#F3702A", width: '32px', height: '32px', marginLeft: '89px'}}>A</Avatar>
                    <Typography style={{ marginLeft: '25px' }} > 일반가입 : 사이트에서 제공하는 약관동의, 개인정보 입력 단계를 통한 회원가입 방식으로 별도의 본인인증 절차 없음. 단, 이메일 중복 제한 적용
                    <br/>
                    간편가입 : SNS를 통한 간편가입으로, 소셜로그인(본인인증을 대체)을 통한 개인식별정보(이메일, 휴대폰 번호 등)를 자동으로 설정 후 추가정보 입력. 단, 이메일 중복 제한 적용
                     </Typography>
                    </Box>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel2'} onChange={handleChange2('panel2')}>
                <AccordionSummary style={{marginRight: '25px'}}
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Box alignItems="center" display="flex" height="82px">
                    <Typography style={{ marginLeft: '40px', marginRight: '40px' }} color="#666666">  4 </Typography>
                    <Avatar sx={{ bgcolor:"#F3702A", width: '32px', height: '32px'}}>Q</Avatar>
                    <Typography style={{ marginLeft: '25px' }} fontWeight="bold" > 전체 </Typography>
                    <Typography style={{ marginLeft: '50px' }} > 일반 회원가입은 어떻게 하나요? </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Box alignItems="center" display="flex" mb="25px">
                    <Avatar sx={{ bgcolor:"white", border:"1px solid #F3702A", color:"#F3702A", width: '32px', height: '32px', marginLeft: '89px'}}>A</Avatar>
                    <Typography style={{ marginLeft: '25px' }} > 일반가입 : 사이트에서 제공하는 약관동의, 개인정보 입력 단계를 통한 회원가입 방식으로 별도의 본인인증 절차 없음. 단, 이메일 중복 제한 적용
                    <br/>
                    간편가입 : SNS를 통한 간편가입으로, 소셜로그인(본인인증을 대체)을 통한 개인식별정보(이메일, 휴대폰 번호 등)를 자동으로 설정 후 추가정보 입력. 단, 이메일 중복 제한 적용
                     </Typography>
                    </Box>
                </AccordionDetails>
              </Accordion>
              
              <Accordion expanded={expanded === 'panel3'} onChange={handleChange2('panel3')}>
                <AccordionSummary style={{marginRight: '25px'}}
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Box alignItems="center" display="flex" height="82px">
                    <Typography style={{ marginLeft: '40px', marginRight: '40px' }} color="#666666">  3 </Typography>
                    <Avatar sx={{ bgcolor:"#F3702A", width: '32px', height: '32px'}}>Q</Avatar>
                    <Typography style={{ marginLeft: '25px' }} fontWeight="bold" > 전체 </Typography>
                    <Typography style={{ marginLeft: '50px' }} > 일반 회원가입은 어떻게 하나요? </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Box alignItems="center" display="flex" mb="25px">
                    <Avatar sx={{ bgcolor:"white", border:"1px solid #F3702A", color:"#F3702A", width: '32px', height: '32px', marginLeft: '89px'}}>A</Avatar>
                    <Typography style={{ marginLeft: '25px' }} > 일반가입 : 사이트에서 제공하는 약관동의, 개인정보 입력 단계를 통한 회원가입 방식으로 별도의 본인인증 절차 없음. 단, 이메일 중복 제한 적용
                    <br/>
                    간편가입 : SNS를 통한 간편가입으로, 소셜로그인(본인인증을 대체)을 통한 개인식별정보(이메일, 휴대폰 번호 등)를 자동으로 설정 후 추가정보 입력. 단, 이메일 중복 제한 적용
                     </Typography>
                    </Box>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel4'} onChange={handleChange2('panel4')}>
                <AccordionSummary style={{marginRight: '25px'}}
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Box alignItems="center" display="flex" height="82px">
                    <Typography style={{ marginLeft: '40px', marginRight: '40px' }} color="#666666">  2 </Typography>
                    <Avatar sx={{ bgcolor:"#F3702A", width: '32px', height: '32px'}}>Q</Avatar>
                    <Typography style={{ marginLeft: '25px' }} fontWeight="bold" > 전체 </Typography>
                    <Typography style={{ marginLeft: '50px' }} > 일반 회원가입은 어떻게 하나요? </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Box alignItems="center" display="flex" mb="25px">
                    <Avatar sx={{ bgcolor:"white", border:"1px solid #F3702A", color:"#F3702A", width: '32px', height: '32px', marginLeft: '89px'}}>A</Avatar>
                    <Typography style={{ marginLeft: '25px' }} > 일반가입 : 사이트에서 제공하는 약관동의, 개인정보 입력 단계를 통한 회원가입 방식으로 별도의 본인인증 절차 없음. 단, 이메일 중복 제한 적용
                    <br/>
                    간편가입 : SNS를 통한 간편가입으로, 소셜로그인(본인인증을 대체)을 통한 개인식별정보(이메일, 휴대폰 번호 등)를 자동으로 설정 후 추가정보 입력. 단, 이메일 중복 제한 적용
                     </Typography>
                    </Box>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel5'} onChange={handleChange2('panel5')}>
                <AccordionSummary style={{marginRight: '25px'}}
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Box alignItems="center" display="flex" height="82px">
                    <Typography style={{ marginLeft: '40px', marginRight: '40px' }} color="#666666">  1 </Typography>
                    <Avatar sx={{ bgcolor:"#F3702A", width: '32px', height: '32px'}}>Q</Avatar>
                    <Typography style={{ marginLeft: '25px' }} fontWeight="bold" > 전체 </Typography>
                    <Typography style={{ marginLeft: '50px' }} > 일반 회원가입은 어떻게 하나요? </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Box alignItems="center" display="flex" mb="25px">
                    <Avatar sx={{ bgcolor:"white", border:"1px solid #F3702A", color:"#F3702A", width: '32px', height: '32px', marginLeft: '89px'}}>A</Avatar>
                    <Typography style={{ marginLeft: '25px' }} > 일반가입 : 사이트에서 제공하는 약관동의, 개인정보 입력 단계를 통한 회원가입 방식으로 별도의 본인인증 절차 없음. 단, 이메일 중복 제한 적용
                    <br/>
                    간편가입 : SNS를 통한 간편가입으로, 소셜로그인(본인인증을 대체)을 통한 개인식별정보(이메일, 휴대폰 번호 등)를 자동으로 설정 후 추가정보 입력. 단, 이메일 중복 제한 적용
                     </Typography>
                    </Box>
                </AccordionDetails>
              </Accordion>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange2('panel1')}>
                <AccordionSummary style={{marginRight: '25px'}}
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Box alignItems="center" display="flex" height="82px">
                    <Typography style={{ marginLeft: '40px', marginRight: '40px' }} color="#666666">  5 </Typography>
                    <Avatar sx={{ bgcolor:"#F3702A", width: '32px', height: '32px'}}>Q</Avatar>
                    <Typography style={{ marginLeft: '25px' }} fontWeight="bold" > 로그인 / 회원가입 </Typography>
                    <Typography style={{ marginLeft: '50px' }} > 일반 회원가입은 어떻게 하나요? </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Box alignItems="center" display="flex" mb="25px">
                    <Avatar sx={{ bgcolor:"white", border:"1px solid #F3702A", color:"#F3702A", width: '32px', height: '32px', marginLeft: '89px'}}>A</Avatar>
                    <Typography style={{ marginLeft: '25px' }} > 일반가입 : 사이트에서 제공하는 약관동의, 개인정보 입력 단계를 통한 회원가입 방식으로 별도의 본인인증 절차 없음. 단, 이메일 중복 제한 적용
                    <br/>
                    간편가입 : SNS를 통한 간편가입으로, 소셜로그인(본인인증을 대체)을 통한 개인식별정보(이메일, 휴대폰 번호 등)를 자동으로 설정 후 추가정보 입력. 단, 이메일 중복 제한 적용
                     </Typography>
                    </Box>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel2'} onChange={handleChange2('panel2')}>
                <AccordionSummary style={{marginRight: '25px'}}
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Box alignItems="center" display="flex" height="82px">
                    <Typography style={{ marginLeft: '40px', marginRight: '40px' }} color="#666666">  4 </Typography>
                    <Avatar sx={{ bgcolor:"#F3702A", width: '32px', height: '32px'}}>Q</Avatar>
                    <Typography style={{ marginLeft: '25px' }} fontWeight="bold" > 로그인 / 회원가입 </Typography>
                    <Typography style={{ marginLeft: '50px' }} > 일반 회원가입은 어떻게 하나요? </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Box alignItems="center" display="flex" mb="25px">
                    <Avatar sx={{ bgcolor:"white", border:"1px solid #F3702A", color:"#F3702A", width: '32px', height: '32px', marginLeft: '89px'}}>A</Avatar>
                    <Typography style={{ marginLeft: '25px' }} > 일반가입 : 사이트에서 제공하는 약관동의, 개인정보 입력 단계를 통한 회원가입 방식으로 별도의 본인인증 절차 없음. 단, 이메일 중복 제한 적용
                    <br/>
                    간편가입 : SNS를 통한 간편가입으로, 소셜로그인(본인인증을 대체)을 통한 개인식별정보(이메일, 휴대폰 번호 등)를 자동으로 설정 후 추가정보 입력. 단, 이메일 중복 제한 적용
                     </Typography>
                    </Box>
                </AccordionDetails>
              </Accordion>
              
              <Accordion expanded={expanded === 'panel3'} onChange={handleChange2('panel3')}>
                <AccordionSummary style={{marginRight: '25px'}}
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Box alignItems="center" display="flex" height="82px">
                    <Typography style={{ marginLeft: '40px', marginRight: '40px' }} color="#666666">  3 </Typography>
                    <Avatar sx={{ bgcolor:"#F3702A", width: '32px', height: '32px'}}>Q</Avatar>
                    <Typography style={{ marginLeft: '25px' }} fontWeight="bold" > 로그인 / 회원가입 </Typography>
                    <Typography style={{ marginLeft: '50px' }} > 일반 회원가입은 어떻게 하나요? </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Box alignItems="center" display="flex" mb="25px">
                    <Avatar sx={{ bgcolor:"white", border:"1px solid #F3702A", color:"#F3702A", width: '32px', height: '32px', marginLeft: '89px'}}>A</Avatar>
                    <Typography style={{ marginLeft: '25px' }} > 일반가입 : 사이트에서 제공하는 약관동의, 개인정보 입력 단계를 통한 회원가입 방식으로 별도의 본인인증 절차 없음. 단, 이메일 중복 제한 적용
                    <br/>
                    간편가입 : SNS를 통한 간편가입으로, 소셜로그인(본인인증을 대체)을 통한 개인식별정보(이메일, 휴대폰 번호 등)를 자동으로 설정 후 추가정보 입력. 단, 이메일 중복 제한 적용
                     </Typography>
                    </Box>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel4'} onChange={handleChange2('panel4')}>
                <AccordionSummary style={{marginRight: '25px'}}
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Box alignItems="center" display="flex" height="82px">
                    <Typography style={{ marginLeft: '40px', marginRight: '40px' }} color="#666666">  2 </Typography>
                    <Avatar sx={{ bgcolor:"#F3702A", width: '32px', height: '32px'}}>Q</Avatar>
                    <Typography style={{ marginLeft: '25px' }} fontWeight="bold" > 로그인 / 회원가입 </Typography>
                    <Typography style={{ marginLeft: '50px' }} > 일반 회원가입은 어떻게 하나요? </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Box alignItems="center" display="flex" mb="25px">
                    <Avatar sx={{ bgcolor:"white", border:"1px solid #F3702A", color:"#F3702A", width: '32px', height: '32px', marginLeft: '89px'}}>A</Avatar>
                    <Typography style={{ marginLeft: '25px' }} > 일반가입 : 사이트에서 제공하는 약관동의, 개인정보 입력 단계를 통한 회원가입 방식으로 별도의 본인인증 절차 없음. 단, 이메일 중복 제한 적용
                    <br/>
                    간편가입 : SNS를 통한 간편가입으로, 소셜로그인(본인인증을 대체)을 통한 개인식별정보(이메일, 휴대폰 번호 등)를 자동으로 설정 후 추가정보 입력. 단, 이메일 중복 제한 적용
                     </Typography>
                    </Box>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel5'} onChange={handleChange2('panel5')}>
                <AccordionSummary style={{marginRight: '25px'}}
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Box alignItems="center" display="flex" height="82px">
                    <Typography style={{ marginLeft: '40px', marginRight: '40px' }} color="#666666">  1 </Typography>
                    <Avatar sx={{ bgcolor:"#F3702A", width: '32px', height: '32px'}}>Q</Avatar>
                    <Typography style={{ marginLeft: '25px' }} fontWeight="bold" > 로그인 / 회원가입 </Typography>
                    <Typography style={{ marginLeft: '50px' }} > 콘텐츠 생성은 어떻게 하나요? </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Box alignItems="center" display="flex" mb="25px">
                    <Avatar sx={{ bgcolor:"white", border:"1px solid #F3702A", color:"#F3702A", width: '32px', height: '32px', marginLeft: '89px'}}>A</Avatar>
                    <Typography style={{ marginLeft: '25px' }} > 일반가입 : 사이트에서 제공하는 약관동의, 개인정보 입력 단계를 통한 회원가입 방식으로 별도의 본인인증 절차 없음. 단, 이메일 중복 제한 적용
                    <br/>
                    간편가입 : SNS를 통한 간편가입으로, 소셜로그인(본인인증을 대체)을 통한 개인식별정보(이메일, 휴대폰 번호 등)를 자동으로 설정 후 추가정보 입력. 단, 이메일 중복 제한 적용
                     </Typography>
                    </Box>
                </AccordionDetails>
              </Accordion>
            </TabPanel>
            <TabPanel value={value} index={2}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange2('panel1')}>
                <AccordionSummary style={{marginRight: '25px'}}
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Box alignItems="center" display="flex" height="82px">
                    <Typography style={{ marginLeft: '40px', marginRight: '40px' }} color="#666666">  5 </Typography>
                    <Avatar sx={{ bgcolor:"#F3702A", width: '32px', height: '32px'}}>Q</Avatar>
                    <Typography style={{ marginLeft: '25px' }} fontWeight="bold" > 단체 가입 </Typography>
                    <Typography style={{ marginLeft: '50px' }} > 단체 회원가입은 어떻게 하나요? </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Box alignItems="center" display="flex" mb="25px">
                    <Avatar sx={{ bgcolor:"white", border:"1px solid #F3702A", color:"#F3702A", width: '32px', height: '32px', marginLeft: '89px'}}>A</Avatar>
                    <Typography style={{ marginLeft: '25px' }} > 일반가입 : 사이트에서 제공하는 약관동의, 개인정보 입력 단계를 통한 회원가입 방식으로 별도의 본인인증 절차 없음. 단, 이메일 중복 제한 적용
                    <br/>
                    간편가입 : SNS를 통한 간편가입으로, 소셜로그인(본인인증을 대체)을 통한 개인식별정보(이메일, 휴대폰 번호 등)를 자동으로 설정 후 추가정보 입력. 단, 이메일 중복 제한 적용
                     </Typography>
                    </Box>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel2'} onChange={handleChange2('panel2')}>
                <AccordionSummary style={{marginRight: '25px'}}
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Box alignItems="center" display="flex" height="82px">
                    <Typography style={{ marginLeft: '40px', marginRight: '40px' }} color="#666666">  4 </Typography>
                    <Avatar sx={{ bgcolor:"#F3702A", width: '32px', height: '32px'}}>Q</Avatar>
                    <Typography style={{ marginLeft: '25px' }} fontWeight="bold" > 단체 가입 </Typography>
                    <Typography style={{ marginLeft: '50px' }} > 단체 회원가입은 어떻게 하나요? </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Box alignItems="center" display="flex" mb="25px">
                    <Avatar sx={{ bgcolor:"white", border:"1px solid #F3702A", color:"#F3702A", width: '32px', height: '32px', marginLeft: '89px'}}>A</Avatar>
                    <Typography style={{ marginLeft: '25px' }} > 일반가입 : 사이트에서 제공하는 약관동의, 개인정보 입력 단계를 통한 회원가입 방식으로 별도의 본인인증 절차 없음. 단, 이메일 중복 제한 적용
                    <br/>
                    간편가입 : SNS를 통한 간편가입으로, 소셜로그인(본인인증을 대체)을 통한 개인식별정보(이메일, 휴대폰 번호 등)를 자동으로 설정 후 추가정보 입력. 단, 이메일 중복 제한 적용
                     </Typography>
                    </Box>
                </AccordionDetails>
              </Accordion>
              
              <Accordion expanded={expanded === 'panel3'} onChange={handleChange2('panel3')}>
                <AccordionSummary style={{marginRight: '25px'}}
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Box alignItems="center" display="flex" height="82px">
                    <Typography style={{ marginLeft: '40px', marginRight: '40px' }} color="#666666">  3 </Typography>
                    <Avatar sx={{ bgcolor:"#F3702A", width: '32px', height: '32px'}}>Q</Avatar>
                    <Typography style={{ marginLeft: '25px' }} fontWeight="bold" > 단체 가입 </Typography>
                    <Typography style={{ marginLeft: '50px' }} > 단체 회원가입은 어떻게 하나요? </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Box alignItems="center" display="flex" mb="25px">
                    <Avatar sx={{ bgcolor:"white", border:"1px solid #F3702A", color:"#F3702A", width: '32px', height: '32px', marginLeft: '89px'}}>A</Avatar>
                    <Typography style={{ marginLeft: '25px' }} > 일반가입 : 사이트에서 제공하는 약관동의, 개인정보 입력 단계를 통한 회원가입 방식으로 별도의 본인인증 절차 없음. 단, 이메일 중복 제한 적용
                    <br/>
                    간편가입 : SNS를 통한 간편가입으로, 소셜로그인(본인인증을 대체)을 통한 개인식별정보(이메일, 휴대폰 번호 등)를 자동으로 설정 후 추가정보 입력. 단, 이메일 중복 제한 적용
                     </Typography>
                    </Box>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel4'} onChange={handleChange2('panel4')}>
                <AccordionSummary style={{marginRight: '25px'}}
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Box alignItems="center" display="flex" height="82px">
                    <Typography style={{ marginLeft: '40px', marginRight: '40px' }} color="#666666">  2 </Typography>
                    <Avatar sx={{ bgcolor:"#F3702A", width: '32px', height: '32px'}}>Q</Avatar>
                    <Typography style={{ marginLeft: '25px' }} fontWeight="bold" > 단체 가입 </Typography>
                    <Typography style={{ marginLeft: '50px' }} > 단체 회원가입은 어떻게 하나요? </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Box alignItems="center" display="flex" mb="25px">
                    <Avatar sx={{ bgcolor:"white", border:"1px solid #F3702A", color:"#F3702A", width: '32px', height: '32px', marginLeft: '89px'}}>A</Avatar>
                    <Typography style={{ marginLeft: '25px' }} > 일반가입 : 사이트에서 제공하는 약관동의, 개인정보 입력 단계를 통한 회원가입 방식으로 별도의 본인인증 절차 없음. 단, 이메일 중복 제한 적용
                    <br/>
                    간편가입 : SNS를 통한 간편가입으로, 소셜로그인(본인인증을 대체)을 통한 개인식별정보(이메일, 휴대폰 번호 등)를 자동으로 설정 후 추가정보 입력. 단, 이메일 중복 제한 적용
                     </Typography>
                    </Box>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel5'} onChange={handleChange2('panel5')}>
                <AccordionSummary style={{marginRight: '25px'}}
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Box alignItems="center" display="flex" height="82px">
                    <Typography style={{ marginLeft: '40px', marginRight: '40px' }} color="#666666">  1 </Typography>
                    <Avatar sx={{ bgcolor:"#F3702A", width: '32px', height: '32px'}}>Q</Avatar>
                    <Typography style={{ marginLeft: '25px' }} fontWeight="bold" > 단체 가입 </Typography>
                    <Typography style={{ marginLeft: '50px' }} > 단체 회원가입은 어떻게 하나요? </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Box alignItems="center" display="flex" mb="25px">
                    <Avatar sx={{ bgcolor:"white", border:"1px solid #F3702A", color:"#F3702A", width: '32px', height: '32px', marginLeft: '89px'}}>A</Avatar>
                    <Typography style={{ marginLeft: '25px' }} > 일반가입 : 사이트에서 제공하는 약관동의, 개인정보 입력 단계를 통한 회원가입 방식으로 별도의 본인인증 절차 없음. 단, 이메일 중복 제한 적용
                    <br/>
                    간편가입 : SNS를 통한 간편가입으로, 소셜로그인(본인인증을 대체)을 통한 개인식별정보(이메일, 휴대폰 번호 등)를 자동으로 설정 후 추가정보 입력. 단, 이메일 중복 제한 적용
                     </Typography>
                    </Box>
                </AccordionDetails>
              </Accordion>
            </TabPanel>
            <TabPanel value={value} index={3}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange2('panel1')}>
                <AccordionSummary style={{marginRight: '25px'}}
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Box alignItems="center" display="flex" height="82px">
                    <Typography style={{ marginLeft: '40px', marginRight: '40px' }} color="#666666">  5 </Typography>
                    <Avatar sx={{ bgcolor:"#F3702A", width: '32px', height: '32px'}}>Q</Avatar>
                    <Typography style={{ marginLeft: '25px' }} fontWeight="bold" > 관광지 </Typography>
                    <Typography style={{ marginLeft: '50px' }} > 일반 회원가입은 어떻게 하나요? </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Box alignItems="center" display="flex" mb="25px">
                    <Avatar sx={{ bgcolor:"white", border:"1px solid #F3702A", color:"#F3702A", width: '32px', height: '32px', marginLeft: '89px'}}>A</Avatar>
                    <Typography style={{ marginLeft: '25px' }} > 일반가입 : 사이트에서 제공하는 약관동의, 개인정보 입력 단계를 통한 회원가입 방식으로 별도의 본인인증 절차 없음. 단, 이메일 중복 제한 적용
                    <br/>
                    간편가입 : SNS를 통한 간편가입으로, 소셜로그인(본인인증을 대체)을 통한 개인식별정보(이메일, 휴대폰 번호 등)를 자동으로 설정 후 추가정보 입력. 단, 이메일 중복 제한 적용
                     </Typography>
                    </Box>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel2'} onChange={handleChange2('panel2')}>
                <AccordionSummary style={{marginRight: '25px'}}
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Box alignItems="center" display="flex" height="82px">
                    <Typography style={{ marginLeft: '40px', marginRight: '40px' }} color="#666666">  4 </Typography>
                    <Avatar sx={{ bgcolor:"#F3702A", width: '32px', height: '32px'}}>Q</Avatar>
                    <Typography style={{ marginLeft: '25px' }} fontWeight="bold" > 관광지 </Typography>
                    <Typography style={{ marginLeft: '50px' }} > 일반 회원가입은 어떻게 하나요? </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Box alignItems="center" display="flex" mb="25px">
                    <Avatar sx={{ bgcolor:"white", border:"1px solid #F3702A", color:"#F3702A", width: '32px', height: '32px', marginLeft: '89px'}}>A</Avatar>
                    <Typography style={{ marginLeft: '25px' }} > 일반가입 : 사이트에서 제공하는 약관동의, 개인정보 입력 단계를 통한 회원가입 방식으로 별도의 본인인증 절차 없음. 단, 이메일 중복 제한 적용
                    <br/>
                    간편가입 : SNS를 통한 간편가입으로, 소셜로그인(본인인증을 대체)을 통한 개인식별정보(이메일, 휴대폰 번호 등)를 자동으로 설정 후 추가정보 입력. 단, 이메일 중복 제한 적용
                     </Typography>
                    </Box>
                </AccordionDetails>
              </Accordion>
              
              <Accordion expanded={expanded === 'panel3'} onChange={handleChange2('panel3')}>
                <AccordionSummary style={{marginRight: '25px'}}
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Box alignItems="center" display="flex" height="82px">
                    <Typography style={{ marginLeft: '40px', marginRight: '40px' }} color="#666666">  3 </Typography>
                    <Avatar sx={{ bgcolor:"#F3702A", width: '32px', height: '32px'}}>Q</Avatar>
                    <Typography style={{ marginLeft: '25px' }} fontWeight="bold" > 관광지 </Typography>
                    <Typography style={{ marginLeft: '50px' }} > 일반 회원가입은 어떻게 하나요? </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Box alignItems="center" display="flex" mb="25px">
                    <Avatar sx={{ bgcolor:"white", border:"1px solid #F3702A", color:"#F3702A", width: '32px', height: '32px', marginLeft: '89px'}}>A</Avatar>
                    <Typography style={{ marginLeft: '25px' }} > 일반가입 : 사이트에서 제공하는 약관동의, 개인정보 입력 단계를 통한 회원가입 방식으로 별도의 본인인증 절차 없음. 단, 이메일 중복 제한 적용
                    <br/>
                    간편가입 : SNS를 통한 간편가입으로, 소셜로그인(본인인증을 대체)을 통한 개인식별정보(이메일, 휴대폰 번호 등)를 자동으로 설정 후 추가정보 입력. 단, 이메일 중복 제한 적용
                     </Typography>
                    </Box>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel4'} onChange={handleChange2('panel4')}>
                <AccordionSummary style={{marginRight: '25px'}}
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Box alignItems="center" display="flex" height="82px">
                    <Typography style={{ marginLeft: '40px', marginRight: '40px' }} color="#666666">  2 </Typography>
                    <Avatar sx={{ bgcolor:"#F3702A", width: '32px', height: '32px'}}>Q</Avatar>
                    <Typography style={{ marginLeft: '25px' }} fontWeight="bold" > 관광지 </Typography>
                    <Typography style={{ marginLeft: '50px' }} > 일반 회원가입은 어떻게 하나요? </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Box alignItems="center" display="flex" mb="25px">
                    <Avatar sx={{ bgcolor:"white", border:"1px solid #F3702A", color:"#F3702A", width: '32px', height: '32px', marginLeft: '89px'}}>A</Avatar>
                    <Typography style={{ marginLeft: '25px' }} > 일반가입 : 사이트에서 제공하는 약관동의, 개인정보 입력 단계를 통한 회원가입 방식으로 별도의 본인인증 절차 없음. 단, 이메일 중복 제한 적용
                    <br/>
                    간편가입 : SNS를 통한 간편가입으로, 소셜로그인(본인인증을 대체)을 통한 개인식별정보(이메일, 휴대폰 번호 등)를 자동으로 설정 후 추가정보 입력. 단, 이메일 중복 제한 적용
                     </Typography>
                    </Box>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel5'} onChange={handleChange2('panel5')}>
                <AccordionSummary style={{marginRight: '25px'}}
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Box alignItems="center" display="flex" height="82px">
                    <Typography style={{ marginLeft: '40px', marginRight: '40px' }} color="#666666">  1 </Typography>
                    <Avatar sx={{ bgcolor:"#F3702A", width: '32px', height: '32px'}}>Q</Avatar>
                    <Typography style={{ marginLeft: '25px' }} fontWeight="bold" > 관광지 </Typography>
                    <Typography style={{ marginLeft: '50px' }} > 일반 회원가입은 어떻게 하나요? </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Box alignItems="center" display="flex" mb="25px">
                    <Avatar sx={{ bgcolor:"white", border:"1px solid #F3702A", color:"#F3702A", width: '32px', height: '32px', marginLeft: '89px'}}>A</Avatar>
                    <Typography style={{ marginLeft: '25px' }} > 일반가입 : 사이트에서 제공하는 약관동의, 개인정보 입력 단계를 통한 회원가입 방식으로 별도의 본인인증 절차 없음. 단, 이메일 중복 제한 적용
                    <br/>
                    간편가입 : SNS를 통한 간편가입으로, 소셜로그인(본인인증을 대체)을 통한 개인식별정보(이메일, 휴대폰 번호 등)를 자동으로 설정 후 추가정보 입력. 단, 이메일 중복 제한 적용
                     </Typography>
                    </Box>
                </AccordionDetails>
              </Accordion>
            </TabPanel>
            <TabPanel value={value} index={4}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange2('panel1')}>
                <AccordionSummary style={{marginRight: '25px'}}
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Box alignItems="center" display="flex" height="82px">
                    <Typography style={{ marginLeft: '40px', marginRight: '40px' }} color="#666666">  5 </Typography>
                    <Avatar sx={{ bgcolor:"#F3702A", width: '32px', height: '32px'}}>Q</Avatar>
                    <Typography style={{ marginLeft: '25px' }} fontWeight="bold" > 관광 콘텐츠 </Typography>
                    <Typography style={{ marginLeft: '50px' }} > 일반 회원가입은 어떻게 하나요? </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Box alignItems="center" display="flex" mb="25px">
                    <Avatar sx={{ bgcolor:"white", border:"1px solid #F3702A", color:"#F3702A", width: '32px', height: '32px', marginLeft: '89px'}}>A</Avatar>
                    <Typography style={{ marginLeft: '25px' }} > 일반가입 : 사이트에서 제공하는 약관동의, 개인정보 입력 단계를 통한 회원가입 방식으로 별도의 본인인증 절차 없음. 단, 이메일 중복 제한 적용
                    <br/>
                    간편가입 : SNS를 통한 간편가입으로, 소셜로그인(본인인증을 대체)을 통한 개인식별정보(이메일, 휴대폰 번호 등)를 자동으로 설정 후 추가정보 입력. 단, 이메일 중복 제한 적용
                     </Typography>
                    </Box>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel2'} onChange={handleChange2('panel2')}>
                <AccordionSummary style={{marginRight: '25px'}}
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Box alignItems="center" display="flex" height="82px">
                    <Typography style={{ marginLeft: '40px', marginRight: '40px' }} color="#666666">  4 </Typography>
                    <Avatar sx={{ bgcolor:"#F3702A", width: '32px', height: '32px'}}>Q</Avatar>
                    <Typography style={{ marginLeft: '25px' }} fontWeight="bold" > 관광 콘텐츠 </Typography>
                    <Typography style={{ marginLeft: '50px' }} > 일반 회원가입은 어떻게 하나요? </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Box alignItems="center" display="flex" mb="25px">
                    <Avatar sx={{ bgcolor:"white", border:"1px solid #F3702A", color:"#F3702A", width: '32px', height: '32px', marginLeft: '89px'}}>A</Avatar>
                    <Typography style={{ marginLeft: '25px' }} > 일반가입 : 사이트에서 제공하는 약관동의, 개인정보 입력 단계를 통한 회원가입 방식으로 별도의 본인인증 절차 없음. 단, 이메일 중복 제한 적용
                    <br/>
                    간편가입 : SNS를 통한 간편가입으로, 소셜로그인(본인인증을 대체)을 통한 개인식별정보(이메일, 휴대폰 번호 등)를 자동으로 설정 후 추가정보 입력. 단, 이메일 중복 제한 적용
                     </Typography>
                    </Box>
                </AccordionDetails>
              </Accordion>
              
              <Accordion expanded={expanded === 'panel3'} onChange={handleChange2('panel3')}>
                <AccordionSummary style={{marginRight: '25px'}}
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Box alignItems="center" display="flex" height="82px">
                    <Typography style={{ marginLeft: '40px', marginRight: '40px' }} color="#666666">  3 </Typography>
                    <Avatar sx={{ bgcolor:"#F3702A", width: '32px', height: '32px'}}>Q</Avatar>
                    <Typography style={{ marginLeft: '25px' }} fontWeight="bold" > 관광 콘텐츠 </Typography>
                    <Typography style={{ marginLeft: '50px' }} > 일반 회원가입은 어떻게 하나요? </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Box alignItems="center" display="flex" mb="25px">
                    <Avatar sx={{ bgcolor:"white", border:"1px solid #F3702A", color:"#F3702A", width: '32px', height: '32px', marginLeft: '89px'}}>A</Avatar>
                    <Typography style={{ marginLeft: '25px' }} > 일반가입 : 사이트에서 제공하는 약관동의, 개인정보 입력 단계를 통한 회원가입 방식으로 별도의 본인인증 절차 없음. 단, 이메일 중복 제한 적용
                    <br/>
                    간편가입 : SNS를 통한 간편가입으로, 소셜로그인(본인인증을 대체)을 통한 개인식별정보(이메일, 휴대폰 번호 등)를 자동으로 설정 후 추가정보 입력. 단, 이메일 중복 제한 적용
                     </Typography>
                    </Box>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel4'} onChange={handleChange2('panel4')}>
                <AccordionSummary style={{marginRight: '25px'}}
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Box alignItems="center" display="flex" height="82px">
                    <Typography style={{ marginLeft: '40px', marginRight: '40px' }} color="#666666">  2 </Typography>
                    <Avatar sx={{ bgcolor:"#F3702A", width: '32px', height: '32px'}}>Q</Avatar>
                    <Typography style={{ marginLeft: '25px' }} fontWeight="bold" > 관광 콘텐츠 </Typography>
                    <Typography style={{ marginLeft: '50px' }} > 일반 회원가입은 어떻게 하나요? </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Box alignItems="center" display="flex" mb="25px">
                    <Avatar sx={{ bgcolor:"white", border:"1px solid #F3702A", color:"#F3702A", width: '32px', height: '32px', marginLeft: '89px'}}>A</Avatar>
                    <Typography style={{ marginLeft: '25px' }} > 일반가입 : 사이트에서 제공하는 약관동의, 개인정보 입력 단계를 통한 회원가입 방식으로 별도의 본인인증 절차 없음. 단, 이메일 중복 제한 적용
                    <br/>
                    간편가입 : SNS를 통한 간편가입으로, 소셜로그인(본인인증을 대체)을 통한 개인식별정보(이메일, 휴대폰 번호 등)를 자동으로 설정 후 추가정보 입력. 단, 이메일 중복 제한 적용
                     </Typography>
                    </Box>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel5'} onChange={handleChange2('panel5')}>
                <AccordionSummary style={{marginRight: '25px'}}
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Box alignItems="center" display="flex" height="82px">
                    <Typography style={{ marginLeft: '40px', marginRight: '40px' }} color="#666666">  1 </Typography>
                    <Avatar sx={{ bgcolor:"#F3702A", width: '32px', height: '32px'}}>Q</Avatar>
                    <Typography style={{ marginLeft: '25px' }} fontWeight="bold" > 관광 콘텐츠 </Typography>
                    <Typography style={{ marginLeft: '50px' }} > 일반 회원가입은 어떻게 하나요? </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Box alignItems="center" display="flex" mb="25px">
                    <Avatar sx={{ bgcolor:"white", border:"1px solid #F3702A", color:"#F3702A", width: '32px', height: '32px', marginLeft: '89px'}}>A</Avatar>
                    <Typography style={{ marginLeft: '25px' }} > 일반가입 : 사이트에서 제공하는 약관동의, 개인정보 입력 단계를 통한 회원가입 방식으로 별도의 본인인증 절차 없음. 단, 이메일 중복 제한 적용
                    <br/>
                    간편가입 : SNS를 통한 간편가입으로, 소셜로그인(본인인증을 대체)을 통한 개인식별정보(이메일, 휴대폰 번호 등)를 자동으로 설정 후 추가정보 입력. 단, 이메일 중복 제한 적용
                     </Typography>
                    </Box>
                </AccordionDetails>
              </Accordion>
            </TabPanel>
          </Box>
        </div>        
      </>
    );
  };
  
  export default FontColor;
  