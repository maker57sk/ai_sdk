// export async function Flight({ flightNumber }) {
//     const data = await fetch(`https://api.example.com/flight/${flightNumber}`);
  
//     return (
//       <div>
//         <div>{flightNumber}</div>
//         <div>{data.status}</div>
//         <div>{data.source}</div>
//         <div>{data.destination}</div>
//       </div>
//     );
//   }

export async function Flight() {
    const data = 'Flight Component'
  
    return (
      <div>
        <div>flightNumber</div>
        <div>{data}</div>
        {/* <div>{data.source}</div>
        <div>{data.destination}</div> */}
      </div>
    );
  }