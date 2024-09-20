// export async function Stock({ symbol, numOfMonths }) {
//     const data = await fetch(
//       `https://api.example.com/stock/${symbol}/${numOfMonths}`,
//     );
  
//     return (
//       <div>
//         <div>{symbol}</div>
  
//         <div>
//           {data.timeline.map(data => (
//             <div>
//               <div>{data.date}</div>
//               <div>{data.value}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }

export async function Stock() {
    const data = 'Stock Component'
  
    return (
      <div>
        <div>symbol</div>
  
    

       
              <div>{data}</div>
    
      </div>
    );
  }