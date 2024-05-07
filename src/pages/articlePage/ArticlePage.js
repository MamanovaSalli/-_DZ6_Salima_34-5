import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {toggleFullArticle} from "../../store/articleSlice";

const Article = () => {
    const dispatch = useDispatch()
    const showFullArticle = useSelector((state) => state.article.showFullArticle);

    const handleClick = () => {
        dispatch(toggleFullArticle())
    };
    return (
        <div>
            <h2>Реализуемые проекты</h2>
            {!showFullArticle ? (
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Ab aperiam at eveniet itaque praesentium quaerat, quia saepe totam vero.
                        Esse fugiat ipsum, officia quos rem voluptas voluptatibus? Omnis praesentium rem repudiandae
                        vel.
                        Architecto aspernatur commodi consequuntur debitis deserunt dolore dolores, dolorum ea excepturi
                        illo inventore iste laudantium libero,
                        molestiae nam neque nisi numquam, omnis reiciendis similique soluta tempora voluptate
                        voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                    <button onClick={handleClick}>Читать полностью
                                                       <br/> &or;            </button>
                </div>
            ) : (
                <div>
                    <p>
                        elit.
                        Ab aperiam at eveniet itaque praesentium quaerat, quia saepe totam vero.
                        Esse fugiat ipsum, officia quos rem voluptas voluptatibus? Omnis praesentium rem repudiandae
                        vel.
                        Architecto aspernatur commodi consequuntur debitis deserunt dolore dolores, dolorum ea excepturi
                        illo inventore iste laudantium libero,
                        molestiae nam neque nisi numquam, omnis reiciendis similique soluta tempora voluptate
                        voluptatibus.
                    </p>
                </div>
            )}
        </div>
    )
}

export default Article;
