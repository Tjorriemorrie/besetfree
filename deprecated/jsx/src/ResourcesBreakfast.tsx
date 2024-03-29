import * as React from 'react';
import {NavLink} from 'react-router-dom'
import {IResourcesProps} from "./Resources";
import './ResourcesBreakfast.css';


export default class ResourcesBreakfast extends React.Component<IResourcesProps, {}> {

    public render() {
        const pathname = this.props.pathname
        const isMain = pathname === '/resources'
        const isBreakfast = pathname === '/resources/breakfast'

        if (!isMain && !isBreakfast) {
            return null
        }

        return <div className="c-resources-breakfast">
            {/*<a name="breakfast"/>*/}
            <div className="o-wrapper">
                <div className="c-resource-main">
                    <div>
                        <img src="/static/img/resources/breakfast/main.png" />
                    </div>
                    <div>
                        <h2>The Healing Breakfast</h2>
                        <p>They don’t say breakfast is the most important meal of the day for nothing. It is indeed the
                            meal that fuels us up and gears us for the rest of the day. So what would we ideally want
                            in a good breakfast? One that provides our bodies with the correct nutrients it needs as
                            well as allowing growth (especially when still growing) and promotes healing.  We should be
                            eating breakfast like a king, lunch like a prince and supper like a pauper. Instead we grab
                            a flimsy breakfast or skip out on it completely. No surprise we cannot perform optimally
                            and become so ravenously hungry later in the day that we will pretty much eat anything.</p>
                        {(isMain && !isBreakfast)
                            ? <p>
                                <NavLink to="/resources/breakfast">
                                    <button>+ expand</button>
                                </NavLink>
                            </p>
                            : null
                        }
                    </div>
                </div>
            </div>
            {this.renderMore(isBreakfast)}
        </div>
    }

    private renderMore(isBreakfast: boolean) {
        if (!isBreakfast) {
            return null
        }

        return <div>
            <div className="flex-parent">

                <div className="exp-main">

                    <div className="intro">
                        <blockquote>
                            25% of the glucose needed in our body is used by our brain. Our brain needs about 500 grams
                            of glucose daily to fuel our 50 000 thoughts we produce per day. If you do not fuel your
                            brain with the right type of fuels your mental functioning and performance will suffer.
                            Whenever you starve your body or mind from GOOD unrefined carbohydrates your brain takes
                            about 47 minutes to recover after you had a meal containing carbohydrates. This is because
                            the brain can only store a 2 min supply of glucose for emergencies when you are low on
                            them.<br/>
                            <cite>Brain Power; How to improve your brain power
                            <br/>By Arnold Neuhoff</cite>
                        </blockquote>
                        <p>Giving your brain proteins when it needs carbs/sugars to function is like giving a Petrol
                            car Diesel to run on. It just won’t work. This is why unrefined carbohydrates are such an
                            essential part of a healthy healing breakfast.
                        </p>
                    </div>

                    <div className="carbs">
                        <h3>Carbs are not the devil</h3>
                        <img src="/static/img/resources/breakfast/strawberries.png" />
                        <p>Now you might be thinking nah-ah no carbs for me. Not at breakfast or any meal, don’t carbs
                            make you fat? Let’s clarify a few things. Unrefined carbohydrates are broken down over time
                            to produce a steady supply of GOOD sugars. Examples include whole grains such as Oats,
                            Millet, Quinoa, Sorgum, Buckweat and brown rice.  Refined or processed carbohydrates had
                            all the good nutrients and bran removed from them.  Examples include white flour, bread,
                            pastas, cake.  It has been processed and refined and when you eat some fluffy cake you are
                            only eating the energy component of the grain with sugar and virtually zero nutrients. To
                            understand complex carbs better I can highly recommend the following Youtube video by
                            Dr. Christine Dobrowolski.
                        </p>
                        <iframe width="640" height="315" src="https://www.youtube.com/embed/pP42TUmHjto" frameBorder="0" allowFullScreen={true}/>
                        <p>For more information visit her website on <a href="http://www.nutritionaldoublethink.com"
                            target="_new">nutritionaldoublethink.com</a></p>
                        <p>When consuming processed carbs, sugar is quickly released into your system (spike) followed
                            by a hard drop where the body realizes it is in dire need of sugar again and repeats the
                            cycle by prompting you to eat more cake through cravings. This is the curse of being held
                            prisoner in the processed food loop. You feel ravenously hungry, consume as much processed
                            foods you can lay your hands on, but because they are pretty much devoid of any nutrition,
                            your body do not feel satisfied. Neither does your body receive the nutrients or building
                            blocks it needs. So within an hour you feel crazy hungry again and you cannot say no to
                            that donut. To top all that guilt and self-loathing that develop in this cycle when it
                            feels like your food controls you- some “diet experts” tells us to avoid ALL carbs. Now
                            your body starts screaming desperately for those carbs your brain needs just to keep on
                            functioning. Can you see how this process sets people up for failure? Why so many fad diets
                            seem to have very undisciplined disciples that drop out after a while? But understanding
                            this cycle, and grasping that it is not only your weak self-control that is at work here,
                            but biological processes that drive your cravings, you can relax a little. I am going to
                            tell you how to break out of this craving madness. Working with these biological processes
                            and giving your body what it needs, will quiet the cravings and you will be surprised to go
                            through your day without food being such a pesky central point or theme. The solution is a
                            hearty carb filled breakfast with the right kind of carbs. The unrefined variety.</p>
                        <p><em>According to the Dietary Guidelines for Americans 2010, women generally need 1,600 to
                            2,400 calories per day to maintain a healthy body weight, while men usually need 2,000 to
                            3,000 calories each day.</em></p>
                        <p>I don’t do calorie counting. Never have never will. Why? Because the good carbs don’t make
                            you fat. Ok this is my secret to eating like a ravenous wolf but staying thin. Those who
                            know me, or have seen me can confirm- I am lean, but I eat like a bear. By consuming these
                            complex carbohydrates in whole grains form in your 3 grain cereal and as a few slices of
                            whole wheat or whole seed bread, you will ensure a consistent flow of brain fuel throughout
                            the day. (See the three grain super cereal or Healing breakfast topics for more
                            information). Why am I stressing the importance of these healthy carbs? Because many fads
                            diets promote eating protein and fats but starves the body from good carbs that is
                            essential for your brains functioning. See nobody explain to you that there are good and
                            bad carbs, and that all carbs are not the devil.</p>
                    </div>

                    <div className="protein">
                        <h3>What about Protein?</h3>
                        <img src="/static/img/resources/breakfast/bread_spreads.png" />
                        <p>Now that we have covered the body’s carb requirement we will look at your protein
                            requirements. Ideally our breakfast must contain 20-25grams of protein. (This roughly
                            equates to about 17 cashew nuts or 7 tablespoons of smooth peanut butter, four hard-boiled
                            eggs, or a cup of lentils.) Most of us need at least 50 grams of protein a day so double
                            the amounts of the examples above and now you have a rough idea what you should be aiming
                            for daily.  The reason why the healing breakfast includes plant proteins is because a lot
                            of the disease our world experience is because of the consumption of unhealthy animal fats
                            (LDL) that clogs up our arteries and leads to problems like heart disease, cholesterol and
                            even diabetes. So if you are wondering why our breakfast does not include your favorite
                            bacon and egg combo, it might be that your current breakfast regime was responsible for
                            making you sick in the first place. You might be in need of a healthier change.</p>
                        <p>Remember the healing breakfast aims to clear out your body, giving your body the building
                            blocks to heal and restore. YOU NEVER SHOULD FEEL hungry while following our recommended
                            diet or health regime.  You should not snack in-between meals and feel satisfied until your
                            next meal. Try to eat at least two or twee meals a day and no more. Constant snacking may
                            cause the insulin receptors to become desensitized and insulin resistance could be the
                            result. If you are currently experiencing insulin resistance leading to type two diabetes,
                            you will find these recommendations very helpful along with the practice of intermittent
                            fasting. </p>
                    </div>

                    <div className="slides">
                        <img src="/static/img/resources/breakfast/slide1.jpg" />
                        <img src="/static/img/resources/breakfast/slide2.jpg" />
                    </div>

                </div>

                <div className="exp-side">

                    <div className="sequence">
                        <h3>Sequence of eating the healing breakfast</h3>
                        <p>Yes there is actually a sequence to what you should eat during your breakfast. The sequence
                            was derived by scientifically taking the physiology of your digestive system into
                            consideration, the time certain foods take to digest and also taking into account the
                            enzymes these foods contain.  So trust me I can’t go into all the details here but it was
                            formulated for your optimal digestive benefit.</p>
                        <p>Remember the healing breakfast aims to clear out your body, giving your body the building
                            blocks to heal and restore. YOU NEVER SHOULD FEEL hungry while following our recommended
                            diet or health regime.  You should not snack in-between meals and feel satisfied until your
                            next meal. Try to eat at least two or twee meals a day and no more. Constant snacking may
                            cause the insulin receptors to become desensitized and insulin resistance could be the
                            result. If you are currently experiencing insulin resistance leading to type two diabetes,
                            you will find these recommendations very helpful along with the practice of intermittent
                            fasting. </p>
                    </div>

                    <div className="fruits">
                        <h3>1. Fruits First</h3>
                        <img src="/static/img/resources/breakfast/fruits.png" />
                        <p>Starting off with a bowl of 3-4 fresh fruits (eaten first) will provide your body
                            with enzymes that will assist in digestion.</p>
                        <p>Remember most of us really wolf down our food without chewing properly. Digestive
                            wellness is a central component to the healing breakfast. If your gut is working
                            well, is regular, is absorbing nutrients well and eliminating toxins as it should,
                            your immunity will improve as well as your general sense of wellbeing. So please
                            respect your gut and follow my advice to experience the amazing benefits of this
                            healing breakfast. I once was a skeptic just like you. But after trying this
                            lifestyle for 10 days and following it to the letter I was convinced of its
                            amazing power to heal, to transform and to change your life.  I have been on this
                            lifestyle ever since and I am not looking back. The benefits outweigh everything
                            else. So chew well. I should also mention that drinking liquids with your food is a
                            VERY VERY VERY bad idea. Drinking liquids dilutes the digestive juices in your
                            stomach, delays digestion and does not move the food along as it should. As
                            a result certain foods start to ferment and cause gas and other digestive
                            disturbances. I have to confess I was one of those culprits who used to “wash” my
                            food down with juice or drinks. As a result my hydrochloric acid in my stomach was
                            diluted and had a very hard time digesting foods. You might have the same naughty
                            habits I did, suffering the same ill results.</p>
                    </div>

                    <div className="porridge">
                        <h3>2. Porridge is up Next.</h3>
                        <img src="/static/img/resources/breakfast/porridge.png" />
                        <p>Next up is the 3 grain cereal with a milk alternative. (Research milk alternatives
                            or read our article why milk is bad for you). You can also add a sweetener of
                            choice. Examples include fruit, dates, raisins, raw honey, stevia, agave nectar
                            and xylitol. Please check out my list of Natural sweeteners as well. I also add a
                            teaspoon of coconut oil when making my porridge to insure I get my good fats (HDL)
                            as well as two teaspoons of finely ground linseed (Flaxseed) powder. The Linseed
                            (Flaxseed) is bursting with anti-oxidants, Omega 3 and 6 as well as an excellent
                            source of protein.</p>
                    </div>

                    <div className="grains">
                        <h3>3. Whole grain Bread and nut spreads.</h3>
                        <img src="/static/img/resources/breakfast/grains.png" />
                        <p>Moving on, next in the queue is enjoying a slice or two of whole wheat bread or a
                            whole grain muffin. (Please see the “life changing loaf of bread recipe” for ideas)
                            Adding a protein spread like humus with some coconut oil on your bread with
                            cucumber and tomato is very filling and meets that 25grams protein requirement as
                            well. (Please see my protein spread recipes for more ideas). As protein takes the
                            longest to digest and also move the slowest through the digestive system this dish
                            will be last in the queue.</p>
                    </div>

                    <div className="lastly">
                        <img src="/static/img/resources/breakfast/combined.png" />
                        <p>If you are iron deficient please be aware that fortified grains are a rich source of iron as
                            well as molasses. You can add molasses (sulphur free as it lacks the strong taste) over
                            your porridge as a sweetener. This breakfast provides a lot of fibre that is essential for
                            moving the contents of the digestive tract along. It removes toxins and prevents
                            constipation. You should be having a bowel movement after each meal, as this indicates
                            enough fiber in the diet. If this is not the case you might be suffering from mild to
                            moderate constipation.</p>
                        <p>In my personal experience I have had tremendous results and have been completely healed from
                            health conditions that I suffered with for years! My body PH became alkaline after being on
                            this diet after 3 months and I used to be very susceptible to colds and flu and that have
                            all changed. I highly recommend trying this breakfast for 10 days to experience the amazing
                            results and health benefits yourself. You can also have a look at what the healing lunch
                            and dinner on my resource page involves while getting tips about how to eat for the other
                            two meals during your day to promote optimum health.</p>
                        <p><em>Keep well my wellness friends!</em></p>
                        <img src="/static/img/resources/breakfast/combined2.png" />
                    </div>

                </div>

            </div>

            <p className="collapse">
                <NavLink to="/resources#breakfast">
                    <button>&minus; collapse</button>
                </NavLink>
            </p>
        </div>
    }
}
