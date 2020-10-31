import 'package:flutte_app/donateblood.dart';
import 'package:flutte_app/needblood.dart';
import 'package:flutter/material.dart';

class BloodBankWrapper extends StatefulWidget {
  @override
  _BloodBankWrapperState createState() => _BloodBankWrapperState();
}

class _BloodBankWrapperState extends State<BloodBankWrapper> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Center(
          child: Column(
            children: [
              SizedBox(
                height: 120.0,
              ),
              GestureDetector(
                onTap: () {
                  Navigator.push(context,
                      MaterialPageRoute(builder: (context) => NeedBlood()));
                },
                child: Image(
                  image: AssetImage('assets/needbloods.png'),
                  height: 170.0,
                ),
              ),
              Text(
                'Need Blood',
                style: TextStyle(fontFamily: 'Poppins', fontSize: 20.0),
              ),
              SizedBox(
                height: 60.0,
              ),
              GestureDetector(
                onTap: () {
                  Navigator.push(context,
                      MaterialPageRoute(builder: (context) => DonateBlood()));
                },
                child: Image(
                  image: AssetImage('assets/blood-test.png'),
                  height: 150.0,
                ),
              ),
              Text(
                'Donate Blood',
                style: TextStyle(fontFamily: 'Poppins', fontSize: 20.0),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
