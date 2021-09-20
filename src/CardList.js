import React from "react";
import Card from "./Card";

const CardList = ({bio}) => {
    return (
        <div>
            {bio.map((user, i) => {
                return (
                    <Card
                        key={bio[i].id}
                        id={bio[i].id}
                        name={bio[i].name}
                        email={bio[i].email}
                    />
                   );
                  }
                )
              }
        </div>
    )
};

export default CardList;

