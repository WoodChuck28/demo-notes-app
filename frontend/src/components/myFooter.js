import React from 'react'

import {
    Grommet as GrommetIcon,
    FacebookOption,
    Instagram,
    Twitter
  } from "grommet-icons";
  
  import { Anchor, Box, Footer,  Grommet, Text } from "grommet";

  import "./styles/myFooter.css"

  export default function MyFooter({
    
    isLoading,
    className = "MyFooter",
    disabled = false,
    ...props
  }) {
    return (
      <div className="myFooter">
      <Social></Social>
      </div>
    );
  }
  

  const Media = () => (
    <Box direction="row" gap="xxsmall" justify="center">
      <Anchor
        a11yTitle="Look at our insta"
        href="https://www.instagram.com/chargenorth"
        icon={<Instagram color="brand" />}
      />
      <Anchor
        a11yTitle="Check us out on facebook"

        href="https://www.facebook.com/CHARGEnorth"

       
        icon={<FacebookOption color="brand" />}
      />
      <Anchor
        a11yTitle="Follow us on Twitter"

        href="https://twitter.com/"

        icon={<Twitter color="brand" />}
      />
    </Box>
  );

  
  
  const Social = () => (
    
    <Grommet theme={myTheme}>
      <Footer className="container-fluid" background="#D72327" pad="small" border="true" round="medium" height="50px" margin={{top: "50px"}}>
        <Box align="center" direction="row" gap="xsmall">
          <GrommetIcon color="brand" size="small" />
          <Text alignSelf="center" color="brand" size="small">
            Created By Mr Daab Himself
          </Text>
        </Box>
        <Media />
        <Text textAlign="center" size="xsmall">
          ┬ęCopyright
        </Text>
      </Footer>
    </Grommet>
    
  );
  
  

  const myTheme = {
    global: {
      colors: {
        brand: "white",
      },
    },
    anchor: {
       
    },
  };