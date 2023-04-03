import React from "react";
import './Rate.css';
function Rate ({rat})
{
    return(
      <div className="rating-holder">
        <div className="c-rating c-rating--regular" data-rating-value={rat}>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
    </div>
  </div>
    );
}
export default Rate;