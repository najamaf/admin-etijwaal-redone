import React from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';





const LineChart = () => {



    return(
        <Sparklines data={[5, 10, 5, 20, 12, 8, 15]} limit={7}>
        <SparklinesLine color="blue" />
      </Sparklines>

    )
}


export default LineChart