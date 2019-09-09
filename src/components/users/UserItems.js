import React from "react";
import { Card } from "semantic-ui-react";

const UserItems = ({user: {avatar_url, login, desc}}) =>  {
    return (
        <Card
        image={avatar_url}
        header={login}
        meta='Friend'
        description={desc}
      />
    );
}

export default UserItems;
