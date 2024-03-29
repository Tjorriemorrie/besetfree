import * as React from 'react';
import {NavLink} from 'react-router-dom'
import {IResourcesProps} from "./Resources";
import './ResourcesGrain.css';


export default class ResourcesGrain extends React.Component<IResourcesProps, {}> {

    public render() {
        const pathname = this.props.pathname
        const isMain = pathname === '/resources'
        const isGrain = pathname === '/resources/grain'

        if (!isMain && !isGrain) {
            return null
        }

        return <div className="c-resources-grain">
            {/*<a name="grain"/>*/}
            <div className="o-wrapper">
                <div className="c-resource-main">
                    <div>
                        <h2>The Three Grain Super Cereal</h2>
                        <p>The three grain cereal is a quick, easy, very nutritious and digestible
                            breakfast.  This super porridge is stacked with fiber, with a low
                            glycemic index for sustained energy release and the fortified grains
                            are also high in iron.  Added nuts provide more protein and omega 3
                            (good) oils.  Also see the healing breakfast for more information about
                            what a healthy breakfast involves.</p>
                        {(isMain && !isGrain)
                            ? <p>
                                <NavLink to="/resources/grain">
                                    <button>+ expand</button>
                                </NavLink>
                            </p>
                            : null
                        }
                    </div>
                    <div>
                        <img src="/static/img/resources/grain/main.png" />
                    </div>
                </div>
            </div>
            {this.renderMore(isGrain)}
        </div>
    }

    private renderMore(isGrain: boolean) {
        if (!isGrain) {
            return null
        }

        return <div>
            <div className="flex-parent">

                <div className="exp-main">

                    <div className="ratios">
                        <h3>Ratios of different grains and their water requirements</h3>
                        <img src="/static/img/resources/grain/bowls.png" />
                        <p><strong>Different grains use different amounts of water. Please find in
                            the table below the ratios of different grains and their water
                            requirements.</strong> For example Oats require 1 cup of oats and 3 cups
                            of water. Most of these grains can be bought at your local supermarket
                            or health shop.
                        </p>
                        <table>
                            <tbody>
                                <tr><td>For 1 cup oats</td><td> Add 3 cups of water</td></tr>
                                <tr><td> For 1 cup Mealie meal</td><td> Add 2 cups of water</td></tr>
                                <tr><td> For 1 cup Sorghum (Maltabella)</td><td> Add 3 cups water</td></tr>
                                <tr><td> For 1 cup Whole Barley</td><td> Add 3 cups water</td></tr>
                                <tr><td> For 1 cup Whole wheat</td><td> Add 3 cups water</td></tr>
                                <tr><td> For 1 cup Millet</td><td> Add 4 cups water</td></tr>
                                <tr><td> For 1 cup Brown rice</td><td> Add 2 and a half cups of water</td></tr>
                                <tr><td> For 1 cup Buckwheat</td><td> Add 2 cups of water</td></tr>
                                <tr><td> For 1 cup Quinoa</td><td> Add 2 and a half cups of water</td></tr>
                            </tbody>
                        </table>
                        <p><strong>For the best nutritional quality, use three grain from the following list. It is
                            also advised to rotate the use of grains on a regular basis as different grains contain
                            different nutritional benefits. Each different cereal grains contain their own collection
                            of nutrients and phytochemicals, so choose a variety from day to day.</strong>
                        </p>
                    </div>

                    <div className="preparation">
                        <h3>Items required for preparation</h3>
                        <img src="/static/img/resources/grain/finished.png" />
                        <p>The following items are required for this 3 grain cereal preparation:</p>
                        <ul>
                            <li>A pot</li>
                            <li>A cup</li>
                            <li>A spoon</li>
                            <li>Three grains you have chosen from the list above</li>
                            <li>A hotbox (this is optional)</li>
                        </ul>
                        <p>When using the hotbox option approximately 10 minutes will be required for preparation time
                            the night before. The next morning the cereal will be soft, hot and well-cooked. It is
                            simply the easiest way to prepare a super nutritious cereal in the least amount of time.</p>
                        <p>If you do not have a professionally made hot box three zip-up cooler bags (those used to keep
                            frozen food cold) can be used. Place one freezer bag inside the other and a plate on the
                            base of the inner bag.</p>
                        <p>Alternatively wrap a large blanket (folded in four) over the pot to
                            seal in the heat. After placing the warm pot inside the bags remember to zip up each
                            individual zip-up bag.  The hot box can be left until the next morning.</p>
                    </div>

                    <div className="method">
                        <h3>Method</h3>
                        <p>If you want to enjoy your super nutritious three grain cereal in the morning preparations will be required the night before.</p>
                        <p><strong>When using hard grains (example Sorghum, Barley or wheat) or hard and soft grains
                            together</strong> it is very important that the grains are well cooked before consumption.
                            Those suffering from digestive difficulties will greatly benefit from soaking the grains
                            overnight before cooking them.</p>
                        <p>The following preparation method can be followed the night before:</p>
                        <ol>
                            <li>Boil the kettle.</li>
                            <li>Switch the stove plate on.</li>
                            <li>Place grains with correct amounts of boiling water in to a pot
                                with a lid.</li>
                            <li>Add a pinch of salt, vanilla or cinnamon. </li>
                            <li>Dates, chopped raisins or dried fruit can be added to taste
                                (Optional to sweeten porridge with good sugars ).</li>
                            <li>Add a teaspoon of coconut oil. </li>
                            <li>Bring contents to a boil, stir, put lid back on and bring to a
                                boil again. DON’T LIFT THE LID.</li>
                            <li>If using a hotbox; lift pot off stove and tuck into box, a slow
                                cooker or a homemade hot box from zipper bags or a blanket. Let
                                it stand for the night. When using a homemade hot box; tuck towel
                                around the pot and the zip-up bags, tying the handles on the
                                outside of the bag together. Do not lift the lid at this stage as
                                it will allow the heat to escape. </li>
                            <li>If not using a hotbox; Bring contents to a boil, stir, and place
                                lid back on again. Leave to simmer for 10 minutes until the center
                                of the pot contents are boiling vigorously. Lower heat and continue
                                to stir occasionally until all grains are soft and
                                well cooked. </li>
                            <li>The porridge can be placed in the fridge or freezer and reheated
                                when required.</li>
                        </ol>
                        <p>For those using the hotbox option the cereal will be warm cooked and ready to dish up
                            the next morning. No re-heating required! Also the pot is easy to clean. This porridge
                            is super nutritious and bursting with energy but takes less time to prepare the next
                            morning than most box cereals.</p>
                    </div>

                    <div className="meal">
                        <img src="/static/img/resources/grain/meal.png" />
                    </div>

                </div>

                <div className="exp-side">

                    <div className="acquire">
                        <h3>Where do I get a hold of whole grains?</h3>
                        <img src="/static/img/resources/grain/natures_choice.png" />
                        <p>Most of these grains can be bought at your local supermarket or health shop but I prefer
                            to use the products of Natures Choice that is easily available, not expensive and their
                            product clearly indicate that they are gluten free and free of genetically modified
                            organisms (Read up on GMOs). For more information about their products
                            visit <a href="http://www.natureschoice.co.za" target="_newtab" rel="external">Nature's Choice
                                website</a>.</p>
                    </div>

                    <div className="gluten">
                        <h3>For a gluten free solution</h3>
                        <img src="/static/img/resources/grain/wheat.png" />
                        <p>If you are gluten sensitive try to choose three grains from the list that are gluten
                            free. For example exclude wheat products and go with grains such as millet, brown
                            rice, buckwheat, quinoa, certified gluten free oats, unrefined Mealie meal and whole
                            sorghum.
                        </p>
                    </div>

                    <div className="suggestions">
                        <h3>Some serving suggestions</h3>
                        <img src="/static/img/resources/grain/top_down.png" />
                        <p>Top up with good Omega fats by grinding 1 cup of linseed in a coffee grinder. Have 2
                            tablespoons over your porridge. Alternatively for an even better combination of amino
                            acids and fats; Grind 1 cup of linseed, ⅓ cup of sunflower seeds, ⅓ cup of sesame seeds,
                            and ⅓ cup of pumkin seeds together in coffee grinder. Mix the seed powder together and
                            have 2 tablespoons of this mixed seed mix over your 3 grain porriage.  Enjoy with
                            bannana , honey,  sweet molasses and a non dairy milk like soy, rice milk, almond or
                            coconut milk. </p>
                        <p>Add a bowl of fruit salad (or at least 2 fruits), some good low GI whole grain/ whole
                            wheat bread and a healthy protein spread. This breakfast will give you enough energy to
                            last without feeling hungry until late mid day. Also see The Healing Breakfast as topic
                            under resources for more information.</p>
                    </div>

                </div>

            </div>

            <p className="collapse">
                <NavLink to="/resources#grain">
                    <button>&minus; collapse</button>
                </NavLink>
            </p>
        </div>
    }
}
