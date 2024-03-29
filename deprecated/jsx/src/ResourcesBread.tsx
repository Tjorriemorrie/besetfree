import * as React from 'react';
import {NavLink} from 'react-router-dom'
import {IResourcesProps} from "./Resources";
import './ResourcesBread.css';




export default class ResourcesBread extends React.Component<IResourcesProps, {}> {

    public render() {
        const pathname = this.props.pathname;
        const isMain = pathname === '/resources';
        const isBread = pathname === '/resources/bread';

        if (!isMain && !isBread) {
            return null;
        }

        return <div className="c-resource-bread">
            {/*<a name="bread"/>*/}
            <div className="o-wrapper">
                <div className="c-resource-main">
                    <div>
                        <h2>The Life-Changing Loaf of Bread</h2>
                        <p>This dense bread is high in protein and fiber; it's also gluten-free and vegan.</p>
                        {(isMain && !isBread)
                            ? <p>
                                <NavLink to="/resources/bread">
                                    <button>+ expand</button>
                                </NavLink>
                            </p>
                            : null
                        }
                    </div>
                    <div>
                        <img src="/static/img/resources/bread/main.png" />
                    </div>
                </div>
            </div>
            {this.renderMore(isBread)}
        </div>;
    }

    private renderMore(isBread: boolean) {

        if (!isBread) {
            return null
        }

        return <div className="c-resources-content">
            <div className="o-wrapper">
                <div className="story">
                    <p>When my son required a gluten free unrefined, unprocessed diet the need arose for a bread
                        recipe that was filling and flop proof. I started my search with whole wheat/grain recipes
                        but I soon found most recipes required eggs, milk/dairy products or yeast. And I was not
                        comfortable working with yeast at that stage. My sons digestive system also needed a rest
                        and required a plain bread recipe, simple but super nutritious.</p>
                    <p>Most of the breads I tried to bake came out as hard as a brick! I came across this recipe through an
                        angel woman named Elmarie who passed this recipe along. And as its name says our lives have truly
                        changed since then. This bread is dense, filling, gluten, egg and dairy free and really wonderful
                        for people with allergies or food sensitivities. And the best part is it won’t turn out a disaster.
                        The recipe is easy to follow and it turned out perfect the first time I tried it. It’s also great
                        if you want a loaf of bread that will fill you up but won’t fatten you up. So it’s the best bread
                        you can snack on for weight management. It is stacked with proteins, nuts, whole grains and can be
                        easily adjusted or altered. I like to add pumpkin seeds, dried fruit like raisins (sultanas) and
                        have found if I add pulp from my juicing I can create beautiful tasty and moist variations. Add
                        some extra fibre from your orange and carrot juice instead of the water, or add a grated apple,
                        mashed banana or add some coconut flour. The options are endless and will insure you will never be
                        bored with this recipe…ever. Play around and see what really taste great for you. Because the loaf
                        is made from mostly whole grains and seeds it is also low GI and fantastic for diabetics. Nuts can
                        be substituted for other nuts or fruits if you are allergic. When one or two slices of this whole
                        grain bread is added to the healing breakfast I have found I will go the whole day with sustained
                        energy release and will only start to think about food late in the evening.</p>
                    <p>So in summary YOU WONT FIND A HEALTHIER loaf of bread anywhere. This loaf will clean your digestive
                        tract, keep you going for long periods of time, Curb any cravings and will truly change your life
                        and health status.</p>
                </div>
            </div>

            <div className="o-wrapper">
                <div className="exp-main">
                    <div className="ingredients">
                        <p><img src="/static/img/resources/bread/bowls.png" /></p>
                        <h3>The Life-Changing Loaf of Bread
                        <br/><sub>Makes 1 loaf</sub></h3>
                        <p> Gluten, egg and dairy free.</p>
                        <dl>
                            <dt>Ingredients:</dt>
                            <dd>1 cup / 135g sunflower seeds</dd>
                            <dd>½ cup / 90g flax seeds</dd>
                            <dd>½ cup / 65g hazelnuts or almonds</dd>
                            <dd>1 ½ cups / 145g rolled oats</dd>
                            <dd>2 Tbsp. chia seeds</dd>
                            <dd>4 Tbsp. psyllium seed husks (3 Tbsp. if using psyllium husk powder)</dd>
                            <dd>1 tsp. fine grain sea salt (add ½ tsp. if using coarse salt)</dd>
                            <dd>1 Tbsp. maple syrup (for sugar-free diets, use a pinch of stevia)</dd>
                            <dd>3 Tbsp. melted coconut oil or ghee</dd>
                            <dd>1 ½ cups / 350ml boiling water</dd>
                        </dl>
                    </div>

                    <div className="directions">
                        <p><img src="/static/img/resources/bread/teaspoons.png" /></p>
                        <h3>Directions:</h3>
                        <ol>
                            <li>In a flexible, silicon loaf pan combine all dry ingredients, stirring well. Whisk maple
                                syrup, oil and boiling water together in a measuring cup. Add this to the dry
                                ingredients and mix very well until everything is completely soaked and dough becomes
                                very thick (if the dough is too thick to stir, add one or two teaspoons of water until
                                the dough is manageable). Smooth out the top with the back of a spoon. Let sit out on
                                the counter for at least 2 hours, or all day or overnight. To ensure the dough is ready,
                                it should retain its shape even when you pull the sides of the loaf pan away from it it.</li>
                            <li>Preheat oven to 350°F / 175°C.</li>
                            <li>Place loaf pan in the oven on the middle rack, and bake for 20 minutes. Remove bread
                                from loaf pan, place it upside down directly on the rack and bake for another 30-40
                                minutes. Bread is done when it sounds hollow when tapped. Let cool completely before
                                slicing (difficult, but important).</li>
                            <li>Store bread in a tightly sealed container for up to five days. Freezes well too – slice
                                before freezing for quick and easy toast!</li>
                        </ol>
                    </div>

                    <div className="credits">
                        <p><img src="/static/img/resources/bread/bread.png" /></p>
                        <p>This recipe was posted by Sarah Britton who got the
                            recipe from a friend. It is shared here with permission.</p>
                        <p>More wonderful food ideas from Sarah: <a href="https://www.mynewroots.org" target="_newtab">mynewroots.org</a></p>
                    </div>

                    <p className="collapse">
                        <NavLink to="/resources#bread">
                            <button>&minus; collapse</button>
                        </NavLink>
                    </p>
                </div>

                <div className="exp-side">
                    <div className="notes">
                        <h3>Notes and considerations</h3>
                        <ul>
                            <li>Do not substitute the psyllium. If you have a nut allergy, replace nuts with seeds. In
                                the picture of the bread I have added pumpkin seed. If you use ground flax seeds you
                                will need more water. You will also need more water if you use quinoa instead of oats.
                                Use certified gluten-free oats if you have a gluten sensitivity. A flexible, silicon
                                loaf pan is best because you can test to see if the dough is holding together, and it’s
                                easy to remove the loaf from the pan, BUT, a regular pan should be fine.  It was easy
                                to put together and came out beautifully.</li>
                            <li>Sarah Britton  explains the advantages of the bread as follows; The advantages of this
                                bread first of all includes using few utensils. You mix everything in the loaf pan and
                                the only dirty utensils are your spoon and measuring cup. Less to clean.</li>
                            <li>Bread usually requires kneading,  waiting, and then perhaps more kneading. This wonderful
                                bread, on the other hand, is kind of brainless. Dump all the ingredients into the loaf
                                pan, stir, and let it sit for a couple hours. Or overnight. Or all day. Or however long
                                or short you find convenient. You rule the bread, not the other way around.</li>
                            <li>Bread recipes are specific. Use this kind of flour, and that kind of yeast… What if I
                                told you that if you don’t have hazelnut, you could use almonds? If you don’t like oats,
                                you could use rolled spelt. Out of maple syrup? Use honey! See where I am going with
                                this? The only thing I will emphasize is to replace the ingredients in the same
                                proportion and with a similar ingredient for the best results. The rest if your call.</li>
                            <li>Breads require a rising agent, whether that is a sourdough starter (this takes days to
                                make) or commercial yeast (which should really be avoided if possible). This bread
                                doesn’t. Great.</li>
                            <li>Your typical loaf of bread is not really that healthy. It uses flour, which has often
                                been stripped of much of its fiber, bran, essential fats, and unless milled mere hours
                                before baking has lost most of its nutrients through oxidation. It is high in
                                carbohydrates (often refined ones at that) and low in protein and healthy fats. It is
                                high in gluten, something many of us are trying to eat less of. And sometimes bread has
                                kooky ingredients like bleach, corn syrup and food colouring. Seriously. Read those
                                labels.</li>
                            <li>The Life-Changing Loaf uses whole grains, nuts, and seeds. It is high in protein. It is
                                incredibly high in fiber. It is gluten-free and vegan. Everything gets soaked for
                                optimal nutrition and digestion. I will go so far as to say that this bread is good for
                                you.</li>
                            <li>This bread makes the best toast. Ever.</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    }
}
